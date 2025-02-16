import { body } from "express-validator";

import tradeModel from "../models/tradeModel.js";
import withValidationErrors from "./withValidationErrors.js";

const validateTradeInput = withValidationErrors([
  body("type")
    .trim()
    .notEmpty()
    .withMessage("Trade type is required")
    .isIn(["long", "short"])
    .withMessage("Trade type must be either 'long' or 'short'"),

  body("symbol")
    .trim()
    .notEmpty()
    .withMessage("Symbol is required")
    .isLength({ min: 1, max: 20 })
    .withMessage("Symbol must be between 1 and 20 characters")
    .matches(/^[A-Za-z0-9.:-]+$/)
    .withMessage("Symbol contains invalid characters"),

  body("entryDate")
    .notEmpty()
    .withMessage("Entry date is required")
    .isISO8601()
    .withMessage("Invalid entry date format")
    .custom((value) => {
      if (new Date(value) > new Date()) {
        throw new Error("Entry date cannot be in the future");
      }
      return true;
    }),

  body("entryPrice")
    .notEmpty()
    .withMessage("Entry price is required")
    .isFloat({ min: 0.000001 })
    .withMessage("Entry price must be a positive number"),

  body("quantity")
    .notEmpty()
    .withMessage("Quantity is required")
    .isFloat({ min: 0.000001 })
    .withMessage("Quantity must be a positive number"),

  body("exitDate")
    .optional()
    .isISO8601()
    .withMessage("Invalid exit date format")
    .custom((value, { req }) => {
      if (new Date(value) < new Date(req.body.entryDate)) {
        throw new Error("Exit date cannot be before entry date");
      }
      if (new Date(value) > new Date()) {
        throw new Error("Exit date cannot be in the future");
      }
      return true;
    }),

  body("exitPrice")
    .optional()
    .isFloat({ min: 0.000001 })
    .withMessage("Exit price must be a positive number"),

  body("stopLoss")
    .optional()
    .isFloat({ min: 0.000001 })
    .withMessage("Stop loss must be a positive number")
    .custom((value, { req }) => {
      if (req.body.type === "long" && value >= req.body.entryPrice) {
        throw new Error("Stop loss must be below entry price for long trades");
      }
      if (req.body.type === "short" && value <= req.body.entryPrice) {
        throw new Error("Stop loss must be above entry price for short trades");
      }
      return true;
    }),

  body("profitTarget")
    .optional()
    .isFloat({ min: 0.000001 })
    .withMessage("Profit target must be a positive number")
    .custom((value, { req }) => {
      if (req.body.type === "long" && value <= req.body.entryPrice) {
        throw new Error(
          "Profit target must be above entry price for long trades",
        );
      }
      if (req.body.type === "short" && value >= req.body.entryPrice) {
        throw new Error(
          "Profit target must be below entry price for short trades",
        );
      }
      return true;
    }),

  body("fees")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Fees must be a non-negative number"),

  body("notes")
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage("Notes must not exceed 1000 characters"),
]);

const validateTradeUpdate = withValidationErrors([
  body("type")
    .optional()
    .trim()
    .isIn(["long", "short"])
    .withMessage("Trade type must be either 'long' or 'short'"),

  body("symbol")
    .optional()
    .trim()
    .isLength({ min: 1, max: 20 })
    .withMessage("Symbol must be between 1 and 20 characters")
    .matches(/^[A-Za-z0-9.:-]+$/)
    .withMessage("Symbol contains invalid characters"),

  body("entryDate")
    .optional()
    .isISO8601()
    .withMessage("Invalid entry date format")
    .custom((value) => {
      if (new Date(value) > new Date()) {
        throw new Error("Entry date cannot be in the future");
      }
      return true;
    }),

  body("exitDate")
    .optional()
    .isISO8601()
    .withMessage("Invalid exit date format")
    .custom(async (value, { req }) => {
      const trade = await tradeModel.findById(req.params.id);
      if (!trade) {
        throw new Error("Trade not found");
      }

      const entryDate = req.body.entryDate
        ? new Date(req.body.entryDate)
        : trade.entryDate;

      if (new Date(value) < entryDate) {
        throw new Error("Exit date cannot be before entry date");
      }
      if (new Date(value) > new Date()) {
        throw new Error("Exit date cannot be in the future");
      }
      return true;
    }),

  body("exitPrice")
    .optional()
    .isFloat({ min: 0.000001 })
    .withMessage("Exit price must be a positive number"),

  body("stopLoss")
    .optional()
    .isFloat({ min: 0.000001 })
    .withMessage("Stop loss must be a positive number"),

  body("profitTarget")
    .optional()
    .isFloat({ min: 0.000001 })
    .withMessage("Profit target must be a positive number"),

  body("fees")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Fees must be a non-negative number"),

  body("notes")
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage("Notes must not exceed 1000 characters"),
]);

export { validateTradeInput, validateTradeUpdate };

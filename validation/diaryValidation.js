import { body } from "express-validator";

import withValidationErrors from "./withValidationErrors.js";

const validateDiaryInput = withValidationErrors([
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3, max: 100 })
    .withMessage("Name must be between 3 and 100 characters"),

  body("description")
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage("Description must not exceed 500 characters"),

  body("initialBalance")
    .notEmpty()
    .withMessage("Initial balance is required")
    .isFloat({ min: 0 })
    .withMessage("Initial balance must be a positive number")
    .custom((value) => {
      if (value === 0) {
        throw new Error("Initial balance cannot be zero");
      }
      return true;
    }),

  body("platform")
    .trim()
    .notEmpty()
    .withMessage("Trading platform is required")
    .isLength({ min: 2, max: 50 })
    .withMessage("Platform name must be between 2 and 50 characters")
    .matches(/^[a-zA-Z0-9\s\-_.]+$/)
    .withMessage("Platform name contains invalid characters"),
]);

const validateDiaryUpdate = withValidationErrors([
  body("name")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Name cannot be empty")
    .isLength({ min: 3, max: 100 })
    .withMessage("Name must be between 3 and 100 characters"),

  body("description")
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage("Description must not exceed 500 characters"),

  body("initialBalance")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Initial balance must be a positive number")
    .custom((value) => {
      if (value === 0) {
        throw new Error("Initial balance cannot be zero");
      }
      return true;
    }),

  body("platform")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Trading platform cannot be empty")
    .isLength({ min: 2, max: 50 })
    .withMessage("Platform name must be between 2 and 50 characters")
    .matches(/^[a-zA-Z0-9\s\-_.]+$/)
    .withMessage("Platform name contains invalid characters"),
]);

export { validateDiaryInput, validateDiaryUpdate };

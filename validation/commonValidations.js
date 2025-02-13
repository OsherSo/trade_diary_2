import mongoose from "mongoose";
import { body } from "express-validator";

import User from "../models/userModel.js";

import BadRequestError from "../errors/BadRequestError.js";

/**
 * Validates if the provided ID is a valid MongoDB ObjectId.
 * @param {string} id - The ID to validate.
 * @throws {BadRequestError} - If the ID is invalid.
 */
export const validateObjectId = (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new BadRequestError("Invalid ID format");
  }
};

/**
 * Validates if a field is a non-empty string.
 * @param {string} field - The field name to validate.
 * @returns {ValidationChain} - Express-validator validation chain.
 */
export const isNonEmptyString = (field) =>
  body(field)
    .trim()
    .notEmpty()
    .withMessage(`${field} is required`)
    .isString()
    .withMessage(`${field} must be a string`);

/**
 * Validates an email address.
 * @returns {ValidationChain} - Express-validator validation chain.
 */
export const validateEmail = () =>
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format")
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new BadRequestError("Email already exists");
      }
    });

/**
 * Validates a password.
 * @returns {ValidationChain} - Express-validator validation chain.
 */
export const validatePassword = () =>
  body("password")
    .trim()
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/)
    .withMessage(
      "Password must include at least one lowercase letter, one uppercase letter, one number, and one special character",
    );

/**
 * Validates an optional field against a list of allowed values.
 * @param {string} field - The field name to validate.
 * @param {Array} allowedValues - Array of allowed values.
 * @returns {ValidationChain} - Express-validator validation chain.
 */
export const validateOptionalField = (field, allowedValues) =>
  body(field).optional().isIn(allowedValues).withMessage(`Invalid ${field}`);

import { validationResult } from "express-validator";

import NotFoundError from "../errors/NotFoundError.js";
import BadRequestError from "../errors/BadRequestError.js";
import UnauthorizedError from "../errors/UnauthorizedError.js";

/**
 * Wraps validation logic and handles validation errors.
 * @param {Array} validateValues - Array of validation middleware functions.
 * @returns {Array} - Array containing validation middleware and error handler.
 */
const withValidationErrors = (validateValues) => [
  validateValues,
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((error) => error.msg);

      if (errorMessages.some((msg) => msg.includes("not found"))) {
        throw new NotFoundError(errorMessages);
      }

      if (errorMessages.some((msg) => msg.includes("Unauthorized"))) {
        throw new UnauthorizedError(errorMessages);
      }

      throw new BadRequestError(errorMessages);
    }

    next();
  },
];

export default withValidationErrors;

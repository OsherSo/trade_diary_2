import { validationResult } from "express-validator";

import NotFoundError from "../errors/NotFoundError.js";
import BadRequestError from "../errors/BadRequestError.js";
import UnauthorizedError from "../errors/UnauthorizedError.js";

const withValidationErrors = (validateValues) => [
  validateValues,
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((error) => error.msg);

      if (errorMessages[0].includes("not found")) {
        throw new NotFoundError(errorMessages);
      }

      if (errorMessages[0].includes("Unauthorized")) {
        throw new UnauthorizedError(errorMessages);
      }

      throw new BadRequestError(errorMessages);
    }

    next();
  },
];

export default withValidationErrors;

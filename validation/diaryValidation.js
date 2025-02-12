import { body } from "express-validator";

import withValidationErrors from "./withValidationErrors.js";
import { isNonEmptyString } from "./commonValidations.js";

const validateDiaryInput = withValidationErrors([
  isNonEmptyString("name")
    .trim()
    .isLength({ max: 100 })
    .withMessage("Name must not exceed 100 characters"),

  body("description")
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage("Description must not exceed 500 characters"),
]);

const validateDiaryUpdate = withValidationErrors([
  body("name")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Name cannot be empty")
    .isLength({ max: 100 })
    .withMessage("Name must not exceed 100 characters"),

  body("description")
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage("Description must not exceed 500 characters"),
]);

export { validateDiaryInput, validateDiaryUpdate };

import { Router } from "express";

import tradeRouter from "./tradeRouter.js";

import {
  validateDiaryInput,
  validateDiaryUpdate,
} from "../validation/diaryValidation.js";

import {
  getAllDiaries,
  getDiary,
  createDiary,
  updateDiary,
  deleteDiary,
} from "../controllers/diaryController.js";

const diaryRouter = Router();

diaryRouter.use("/:diaryId/trades", tradeRouter);

diaryRouter.route("/").get(getAllDiaries).post(validateDiaryInput, createDiary);

diaryRouter
  .route("/:id")
  .get(getDiary)
  .patch(validateDiaryUpdate, updateDiary)
  .delete(deleteDiary);

export default diaryRouter;

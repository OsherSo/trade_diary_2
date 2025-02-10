import { Router } from "express";

import {
  getAllDiaries,
  getDiary,
  createDiary,
  updateDiary,
  deleteDiary,
} from "../controllers/diaryController.js";

const diaryRouter = Router();

diaryRouter.route("/").get(getAllDiaries).post(createDiary);

diaryRouter.route("/:id").get(getDiary).patch(updateDiary).delete(deleteDiary);

export default diaryRouter;

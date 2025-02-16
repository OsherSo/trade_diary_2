import { Router } from "express";

import {
  validateTradeInput,
  validateTradeUpdate,
} from "../validation/tradeValidation.js";

import {
  getAllTrades,
  getTrade,
  createTrade,
  updateTrade,
  deleteTrade,
} from "../controllers/tradeController.js";

const tradeRouter = Router({ mergeParams: true });

tradeRouter.route("/").get(getAllTrades).post(validateTradeInput, createTrade);

tradeRouter
  .route("/:id")
  .get(getTrade)
  .patch(validateTradeUpdate, updateTrade)
  .delete(deleteTrade);

export default tradeRouter;

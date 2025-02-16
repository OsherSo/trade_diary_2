import mongoose from "mongoose";
import { StatusCodes } from "http-status-codes";

import Trade from "../models/tradeModel.js";
import Diary from "../models/diaryModel.js";
import NotFoundError from "../errors/NotFoundError.js";

export const getAllTrades = async (req, res) => {
  const { diaryId } = req.params;

  const diary = await Diary.findOne({ _id: diaryId, user: req.user.userId });
  if (!diary) {
    throw new NotFoundError("Diary not found");
  }

  const trades = await Trade.find({
    diary: diaryId,
    user: req.user.userId,
  }).sort("-entryDate");

  res.status(StatusCodes.OK).json({
    trades,
    count: trades.length,
  });
};

export const getTrade = async (req, res) => {
  const { id, diaryId } = req.params;

  const trade = await Trade.findOne({
    _id: id,
    diary: diaryId,
    user: req.user.userId,
  });

  if (!trade) {
    throw new NotFoundError("Trade not found");
  }

  res.status(StatusCodes.OK).json({ trade });
};

export const createTrade = async (req, res) => {
  const { diaryId } = req.params;

  const diary = await Diary.findOne({ _id: diaryId, user: req.user.userId });
  if (!diary) {
    throw new NotFoundError("Diary not found");
  }

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const trade = await Trade.create(
      [
        {
          ...req.body,
          diary: diaryId,
          user: req.user.userId,
        },
      ],
      { session },
    );

    await Diary.findByIdAndUpdate(
      diaryId,
      { $push: { trades: trade[0]._id } },
      { session },
    );

    await session.commitTransaction();

    res.status(StatusCodes.CREATED).json({
      trade: trade[0],
      message: "Trade created successfully",
    });
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
};

export const updateTrade = async (req, res) => {
  const { id, diaryId } = req.params;

  const existingTrade = await Trade.findOne({
    _id: id,
    diary: diaryId,
    user: req.user.userId,
  });

  if (!existingTrade) {
    throw new NotFoundError("Trade not found");
  }

  const trade = await Trade.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(StatusCodes.OK).json({
    trade,
    message: "Trade updated successfully",
  });
};

export const deleteTrade = async (req, res) => {
  const { id, diaryId } = req.params;

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const trade = await Trade.findOneAndDelete(
      { _id: id, diary: diaryId, user: req.user.userId },
      { session },
    );

    if (!trade) {
      throw new NotFoundError("Trade not found");
    }

    await Diary.findByIdAndUpdate(
      diaryId,
      { $pull: { trades: id } },
      { session },
    );

    await session.commitTransaction();

    res.status(StatusCodes.OK).json({
      message: "Trade deleted successfully",
    });
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
};

import mongoose from "mongoose";
import { StatusCodes } from "http-status-codes";

import diaryModel from "../models/diaryModel.js";
import tradeModel from "../models/tradeModel.js";
import NotFoundError from "../errors/NotFoundError.js";

export const getAllDiaries = async (req, res) => {
  const diaries = await diaryModel
    .find({ user: req.user.userId })
    .sort("-createdAt");

  res.status(StatusCodes.OK).json({
    diaries,
    count: diaries.length,
  });
};

export const getDiary = async (req, res) => {
  const diary = await diaryModel
    .findOne({
      _id: req.params.id,
      user: req.user.userId,
    })
    .populate("trades");

  if (!diary) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "Diary not found" });
  }

  res.status(StatusCodes.OK).json({ diary });
};

export const createDiary = async (req, res) => {
  req.body.user = req.user.userId;
  const diary = await diaryModel.create(req.body);

  res.status(StatusCodes.CREATED).json({
    diary,
    message: "Trading diary created successfully",
  });
};

export const updateDiary = async (req, res) => {
  const diary = await diaryModel.findOneAndUpdate(
    { _id: req.params.id, user: req.user.userId },
    req.body,
    { new: true, runValidators: true },
  );

  if (!diary) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "Diary not found" });
  }

  res.status(StatusCodes.OK).json({
    diary,
    message: "Trading diary updated successfully",
  });
};

export const deleteDiary = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    await tradeModel.deleteMany(
      { diary: req.params.id, user: req.user.userId },
      { session },
    );

    const diary = await diaryModel.findOneAndDelete(
      {
        _id: req.params.id,
        user: req.user.userId,
      },
      { session },
    );

    if (!diary) {
      throw new NotFoundError("Diary not found");
    }

    await session.commitTransaction();

    res.status(StatusCodes.OK).json({
      message: "Trading diary and associated trades deleted successfully",
    });
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
};

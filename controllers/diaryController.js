import { StatusCodes } from "http-status-codes";

import diaryModel from "../models/diaryModel.js";

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
  const diary = await diaryModel.findOneAndDelete({
    _id: req.params.id,
    user: req.user.userId,
  });

  if (!diary) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "Diary not found" });
  }

  res.status(StatusCodes.OK).json({
    message: "Trading diary deleted successfully",
  });
};

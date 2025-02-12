import { StatusCodes } from "http-status-codes";

import diaryModel from "../models/diaryModel.js";

export const getAllDiaries = async (req, res) => {
  const diaries = await diaryModel
    .find({ user: req.user.userId })
    .sort("-createdAt");
  res.status(StatusCodes.OK).json({ diaries, count: diaries.length });
};

export const getDiary = async (req, res) => {
  const { id } = req.params;
  const diary = await diaryModel.findOne({ _id: id, user: req.user.userId });

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
  res.status(StatusCodes.CREATED).json({ diary });
};

export const updateDiary = async (req, res) => {
  const { id } = req.params;
  const diary = await diaryModel.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(StatusCodes.OK).json({ diary });
};

export const deleteDiary = async (req, res) => {
  const { id } = req.params;
  await diaryModel.findByIdAndDelete(id);
  res.status(StatusCodes.NO_CONTENT).send();
};

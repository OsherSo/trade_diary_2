import { StatusCodes } from "http-status-codes";

import User from "../models/userModel.js";

// eslint-disable-next-line import/prefer-default-export
export const getCurrentUser = async (req, res) => {
  const user = await User.findById(req.user.userId).select("-password");

  res.status(StatusCodes.OK).json({ user });
};

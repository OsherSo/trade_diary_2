import mongoose from "mongoose";

const DiarySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    initialBalance: {
      type: Number,
      required: true,
    },
    platform: {
      type: String,
      required: true,
      trim: true,
    },
    trades: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Trade",
      },
    ],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

DiarySchema.virtual("currentBalance").get(function () {
  const profitLoss = this.trades.reduce(
    (total, trade) => total + (trade.profitLoss || 0),
    0,
  );
  return this.initialBalance + profitLoss;
});

DiarySchema.virtual("totalProfitLoss").get(function () {
  return this.trades.reduce(
    (total, trade) => total + (trade.profitLoss || 0),
    0,
  );
});

export default mongoose.model("Diary", DiarySchema);

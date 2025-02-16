import mongoose from "mongoose";

const TradeSchema = new mongoose.Schema(
  {
    diary: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Diary",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: {
      type: String,
      enum: ["long", "short"],
      required: true,
    },
    symbol: {
      type: String,
      required: true,
    },
    entryDate: {
      type: Date,
      required: true,
    },
    entryPrice: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    exitDate: {
      type: Date,
    },
    exitPrice: {
      type: Number,
    },
    stopLoss: {
      type: Number,
    },
    profitTarget: {
      type: Number,
    },
    fees: {
      type: Number,
      default: 0,
    },
    notes: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

TradeSchema.virtual("profitLoss").get(function () {
  if (!this.exitPrice) return null;

  const direction = this.type === "long" ? 1 : -1;
  const rawPL = (this.exitPrice - this.entryPrice) * this.quantity * direction;
  return rawPL - (this.fees || 0);
});

TradeSchema.virtual("rMultiple").get(function () {
  if (!this.exitPrice || !this.stopLoss) return null;

  const direction = this.type === "long" ? 1 : -1;
  const risk = Math.abs(this.entryPrice - this.stopLoss) * this.quantity;
  const profit =
    (this.exitPrice - this.entryPrice) * this.quantity * direction -
    (this.fees || 0);

  return risk ? profit / risk : null;
});

export default mongoose.model("Trade", TradeSchema);

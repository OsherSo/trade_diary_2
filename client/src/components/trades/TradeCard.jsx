import { useState } from "react";
import { Form } from "react-router-dom";
import {
  TrendingUp,
  TrendingDown,
  Calendar,
  ChevronDown,
  ChevronUp,
  ArrowDownRight,
  Info,
  Trash2,
} from "lucide-react";

const TradeCard = ({ trade }) => {
  const [showNotes, setShowNotes] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const getProfitLossColor = (profitLoss) => {
    if (!profitLoss) return "text-gray-600";
    return profitLoss >= 0 ? "text-emerald-600" : "text-red-600";
  };

  const DeleteConfirmationDialog = () => {
    if (!showDeleteConfirmation) return null;

    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => setShowDeleteConfirmation(false)}
        />

        <div className="relative min-h-screen flex items-center justify-center p-4">
          <div className="relative bg-white rounded-lg w-full max-w-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Delete Trade
            </h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this trade? This action cannot be
              undone.
            </p>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setShowDeleteConfirmation(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
              >
                Cancel
              </button>
              <Form
                method="post"
                action={`delete/${trade._id}`}
                className="flex-1"
              >
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium"
                >
                  Delete
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
        {/* Card Header - Always Visible */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex flex-wrap items-center gap-3">
            {/* Symbol and Type */}
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-900">{trade.symbol}</span>
              <span
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${
                  trade.type === "long"
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {trade.type === "long" ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                {trade.type.toUpperCase()}
              </span>
            </div>

            {/* Dates */}
            <div className="flex flex-wrap items-center gap-3 ml-auto">
              <div className="flex items-center gap-1.5 text-sm text-gray-600">
                <Calendar className="w-4 h-4 text-gray-400" />
                {formatDate(trade.entryDate)}
                {trade.exitDate && (
                  <>
                    <ArrowDownRight className="w-4 h-4 text-gray-400" />
                    {formatDate(trade.exitDate)}
                  </>
                )}
              </div>

              {/* Delete Button */}
              <button
                onClick={() => setShowDeleteConfirmation(true)}
                className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Entry Details */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Entry Price:</span>
                <span className="text-sm font-medium text-gray-900">
                  {formatCurrency(trade.entryPrice)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Quantity:</span>
                <span className="text-sm font-medium text-gray-900">
                  {trade.quantity}
                </span>
              </div>
            </div>

            {/* Exit Details */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Exit Price:</span>
                <span className="text-sm font-medium text-gray-900">
                  {trade.exitPrice ? formatCurrency(trade.exitPrice) : "-"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Fees:</span>
                <span className="text-sm font-medium text-gray-900">
                  {trade.fees ? formatCurrency(trade.fees) : "-"}
                </span>
              </div>
            </div>

            {/* Risk Management */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Stop Loss:</span>
                <span className="text-sm font-medium text-gray-900">
                  {trade.stopLoss ? formatCurrency(trade.stopLoss) : "-"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Take Profit:</span>
                <span className="text-sm font-medium text-gray-900">
                  {trade.profitTarget
                    ? formatCurrency(trade.profitTarget)
                    : "-"}
                </span>
              </div>
            </div>

            {/* Profit/Loss */}
            <div className="flex items-center justify-between lg:justify-end">
              <span className="text-sm font-medium text-gray-900 lg:hidden">
                Profit/Loss:
              </span>
              <span
                className={`text-lg font-semibold ${getProfitLossColor(
                  trade.profitLoss,
                )}`}
              >
                {trade.profitLoss ? formatCurrency(trade.profitLoss) : "-"}
              </span>
            </div>
          </div>

          {/* Notes Section */}
          {trade.notes && (
            <div className="mt-4">
              <button
                onClick={() => setShowNotes(!showNotes)}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
              >
                <Info className="w-4 h-4" />
                <span>Trade Notes</span>
                {showNotes ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
              {showNotes && (
                <div className="mt-2 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">{trade.notes}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <DeleteConfirmationDialog />
    </>
  );
};

export default TradeCard;

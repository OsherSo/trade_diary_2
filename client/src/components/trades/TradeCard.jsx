import { useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  Calendar,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const TradeCard = ({ trade }) => {
  const [showNotes, setShowNotes] = useState(false);

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
    return profitLoss >= 0 ? "text-green-600" : "text-red-600";
  };

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="p-3">
        <div className="flex items-center">
          {/* Symbol */}
          <div className="w-32 flex-shrink-0">
            <span className="font-medium text-gray-900">{trade.symbol}</span>
          </div>

          {/* Type */}
          <div className="w-24 flex-shrink-0">
            <span
              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${
                trade.type === "long"
                  ? "bg-green-100 text-green-700"
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

          {/* Entry Date */}
          <div className="w-40 flex-shrink-0 flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">
              {formatDate(trade.entryDate)}
            </span>
          </div>

          {/* Exit Date */}
          <div className="w-40 flex-shrink-0 flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">
              {trade.exitDate ? formatDate(trade.exitDate) : "-"}
            </span>
          </div>

          {/* Entry Price */}
          <div className="w-36 flex-shrink-0">
            <span className="text-xs text-gray-500 mr-1">Entry:</span>
            <span className="text-sm text-gray-900">
              {formatCurrency(trade.entryPrice)}
            </span>
          </div>

          {/* Exit Price */}
          <div className="w-36 flex-shrink-0">
            <span className="text-xs text-gray-500 mr-1">Exit:</span>
            <span className="text-sm text-gray-900">
              {trade.exitPrice ? formatCurrency(trade.exitPrice) : "-"}
            </span>
          </div>

          {/* Quantity */}
          <div className="w-24 flex-shrink-0">
            <span className="text-xs text-gray-500 mr-1">Qty:</span>
            <span className="text-sm text-gray-900">{trade.quantity}</span>
          </div>

          {/* Stop Loss */}
          <div className="w-32 flex-shrink-0">
            <span className="text-xs text-gray-500 mr-1">SL:</span>
            <span className="text-sm text-gray-900">
              {trade.stopLoss ? formatCurrency(trade.stopLoss) : "-"}
            </span>
          </div>

          {/* Take Profit */}
          <div className="w-32 flex-shrink-0">
            <span className="text-xs text-gray-500 mr-1">TP:</span>
            <span className="text-sm text-gray-900">
              {trade.profitTarget ? formatCurrency(trade.profitTarget) : "-"}
            </span>
          </div>

          {/* Profit/Loss */}
          <div className="w-32 flex-shrink-0">
            <span className="text-xs text-gray-500 mr-1">P/L:</span>
            <span
              className={`text-sm font-medium ${getProfitLossColor(trade.profitLoss)}`}
            >
              {trade.profitLoss ? formatCurrency(trade.profitLoss) : "-"}
            </span>
          </div>

          {/* Notes toggle */}
          <div className="ml-auto pl-4 flex-shrink-0">
            {trade.notes && (
              <button
                onClick={() => setShowNotes(!showNotes)}
                className="text-gray-500 hover:text-gray-700"
              >
                {showNotes ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Notes Section */}
        {showNotes && trade.notes && (
          <div className="mt-2 pl-32">
            <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">
              {trade.notes}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TradeCard;

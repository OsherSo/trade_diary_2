import { LineChart, Calendar, ArrowDownUp, DollarSign } from "lucide-react";

const TradeCard = ({ trade }) => {
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
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
            {trade.symbol}
            <span
              className={`text-sm px-2 py-1 rounded ${
                trade.type === "long"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {trade.type.toUpperCase()}
            </span>
          </h3>
          <div className="text-gray-500 mt-1 flex items-center gap-4">
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {formatDate(trade.entryDate)}
            </span>
            -
            {trade.exitDate && (
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {formatDate(trade.exitDate)}
              </span>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
            <LineChart className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        <div>
          <p className="text-sm text-gray-500 mb-1 flex items-center">
            <ArrowDownUp className="w-4 h-4 mr-1" /> Entry Price
          </p>
          <p className="font-medium text-gray-900">
            {formatCurrency(trade.entryPrice)}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1 flex items-center">
            <ArrowDownUp className="w-4 h-4 mr-1" /> Exit Price
          </p>
          <p className="font-medium text-gray-900">
            {trade.exitPrice ? formatCurrency(trade.exitPrice) : "-"}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1 flex items-center">
            <DollarSign className="w-4 h-4 mr-1" /> Quantity
          </p>
          <p className="font-medium text-gray-900">{trade.quantity}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1 flex items-center">
            <DollarSign className="w-4 h-4 mr-1" /> P/L
          </p>
          <p className={`font-medium ${getProfitLossColor(trade.profitLoss)}`}>
            {trade.profitLoss ? formatCurrency(trade.profitLoss) : "-"}
          </p>
        </div>
      </div>

      {trade.notes && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-600">{trade.notes}</p>
        </div>
      )}
    </div>
  );
};

export default TradeCard;

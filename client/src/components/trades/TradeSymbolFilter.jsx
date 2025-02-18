const TradeSymbolFilter = ({ trades, selectedSymbol, onSymbolSelect }) => {
  // Get unique symbols from trades
  const symbols = [...new Set(trades.map((trade) => trade.symbol))].sort();

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onSymbolSelect(null)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
            selectedSymbol === null
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          All Symbols
        </button>
        {symbols.map((symbol) => (
          <button
            key={symbol}
            onClick={() => onSymbolSelect(symbol)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
              selectedSymbol === symbol
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {symbol}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TradeSymbolFilter;

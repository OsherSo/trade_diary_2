import { LineChart, Info } from "lucide-react";
import { useState } from "react";
import { useLoaderData, Outlet, useLocation } from "react-router-dom";

import { EmptyPage, PageHeader } from "../components/common";
import {
  TradeCard,
  BalanceChart,
  TradeSymbolFilter,
} from "../components/trades";

const Trades = () => {
  const { trades, diary } = useLoaderData();
  const location = useLocation();
  const showTradesList = location.pathname.endsWith("/trades");
  const [selectedSymbol, setSelectedSymbol] = useState(null);

  const filteredTrades = selectedSymbol
    ? trades.filter((trade) => trade.symbol === selectedSymbol)
    : trades;

  const { name, description } = diary;

  return (
    <>
      {showTradesList ? (
        <div>
          <PageHeader
            title={name}
            description={description}
            actionLabel="New Trade"
            actionPath="new"
          />
          {trades.length === 0 ? (
            <EmptyPage
              title="No trades yet"
              content="Start adding trades to track your performance"
            >
              <LineChart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            </EmptyPage>
          ) : (
            <>
              {trades.length > 0 ? (
                <BalanceChart
                  trades={filteredTrades}
                  initialBalance={diary.initialBalance}
                />
              ) : (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-medium text-blue-900">
                      Balance Progression Chart
                    </h3>
                    <p className="text-sm text-blue-700 mt-1">
                      Add {10 - trades.length} more{" "}
                      {trades.length === 9 ? "trade" : "trades"} to unlock the
                      balance progression chart. This chart will help you
                      visualize your account growth over time.
                    </p>
                  </div>
                </div>
              )}

              <TradeSymbolFilter
                trades={trades}
                selectedSymbol={selectedSymbol}
                onSymbolSelect={setSelectedSymbol}
              />

              <div className="grid grid-cols-1 gap-6">
                {filteredTrades.map((trade) => (
                  <TradeCard key={trade._id} trade={trade} />
                ))}
              </div>

              {selectedSymbol && filteredTrades.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-600">
                    No trades found for symbol {selectedSymbol}
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      ) : null}
      <Outlet />
    </>
  );
};

export default Trades;

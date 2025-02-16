import { LineChart } from "lucide-react";
import { useLoaderData } from "react-router-dom";

import { EmptyPage } from "../components/common";
import { TradesHeader, TradeCard } from "../components/trades";

const Trades = () => {
  const { trades, diary } = useLoaderData();

  return (
    <div>
      <TradesHeader diary={diary} />
      {trades.length === 0 ? (
        <EmptyPage
          title="No trades yet"
          content="Start adding trades to track your performance"
        >
          <LineChart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        </EmptyPage>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {trades.map((trade) => (
            <TradeCard key={trade._id} trade={trade} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Trades;

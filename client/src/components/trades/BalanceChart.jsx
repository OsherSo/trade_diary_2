import { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BalanceChart = ({ trades }) => {
  const chartData = useMemo(() => {
    const sortedTrades = [...trades].sort(
      (a, b) => new Date(a.entryDate) - new Date(b.entryDate),
    );

    let runningProfitLoss = 0;
    return sortedTrades.map((trade, index) => {
      if (trade.profitLoss) {
        runningProfitLoss += trade.profitLoss;
      }
      return {
        tradeNumber: index + 1,
        profitLoss: runningProfitLoss,
        date: new Date(trade.entryDate).toLocaleDateString(),
      };
    });
  }, [trades]);

  const dataWithStart = useMemo(() => {
    return [
      {
        tradeNumber: 0,
        profitLoss: 0,
        date: "Start",
      },
      ...chartData,
    ];
  }, [chartData]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      signDisplay: "always",
    }).format(value);
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const value = payload[0].value;
      const isPositive = value >= 0;

      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-sm">
          <p className="text-sm font-medium text-gray-600 mb-1">
            {label === 0 ? "Starting Point" : `Trade #${label}`}
          </p>
          <p
            className={`text-sm font-semibold ${isPositive ? "text-emerald-600" : "text-red-600"}`}
          >
            {formatCurrency(value)}
          </p>
          {label !== 0 && (
            <p className="text-xs text-gray-500 mt-1 border-t border-gray-100 pt-1">
              {payload[0].payload.date}
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  const yAxisDomain = useMemo(() => {
    if (chartData.length === 0) return [0, 0];
    const values = chartData.map((d) => d.profitLoss);
    const min = Math.min(0, ...values);
    const max = Math.max(0, ...values);
    const padding = (max - min) * 0.1;

    const roundedMin = Math.floor((min - padding) / 100) * 100;
    const roundedMax = Math.ceil((max + padding) / 100) * 100;

    return [roundedMin, roundedMax];
  }, [chartData]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Profit/Loss Progression
        </h2>
        <p
          className={`text-sm font-medium ${
            chartData.length > 0 &&
            chartData[chartData.length - 1].profitLoss >= 0
              ? "text-emerald-600"
              : "text-red-600"
          }`}
        >
          Total P/L:{" "}
          {chartData.length > 0
            ? formatCurrency(chartData[chartData.length - 1].profitLoss)
            : formatCurrency(0)}
        </p>
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={dataWithStart}
            margin={{ top: 10, right: 30, left: 60, bottom: 30 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#E5E7EB"
            />
            <XAxis
              dataKey="tradeNumber"
              stroke="#6B7280"
              tick={{ fill: "#6B7280", fontSize: 12 }}
              tickLine={{ stroke: "#6B7280" }}
              axisLine={{ stroke: "#6B7280" }}
              label={{
                value: "Number of Trades",
                dy: 20,
                style: { fill: "#374151", fontSize: 12 },
              }}
            />
            <YAxis
              stroke="#6B7280"
              tick={{ fill: "#6B7280", fontSize: 12 }}
              tickLine={{ stroke: "#6B7280" }}
              axisLine={{ stroke: "#6B7280" }}
              tickFormatter={formatCurrency}
              domain={yAxisDomain}
              scale="linear"
              label={{
                value: "Profit/Loss ($)",
                dx: -45,
                angle: -90,
                style: { fill: "#374151", fontSize: 12 },
              }}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: "#E5E7EB" }}
            />
            <Line
              type="monotone"
              dataKey="profitLoss"
              stroke="#2563EB"
              strokeWidth={2}
              dot={false}
              activeDot={{
                r: 6,
                stroke: "#2563EB",
                strokeWidth: 2,
                fill: "#FFFFFF",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BalanceChart;

import {
  ChartLine,
  Target,
  Shield,
  BarChart3,
  LineChart,
  Database,
} from "lucide-react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<ChartLine className="h-8 w-8 text-blue-600" />}
            title="Trade Logging"
            description="Record each trade with detailed information including type, asset, entry/exit points, and profit/loss."
          />
          <FeatureCard
            icon={<BarChart3 className="h-8 w-8 text-blue-600" />}
            title="Performance Analytics"
            description="Get statistical insights into your trading performance, success rate, and risk-reward ratio."
          />
          <FeatureCard
            icon={<LineChart className="h-8 w-8 text-blue-600" />}
            title="Automated Insights"
            description="Receive AI-driven suggestions to identify patterns and areas for improvement."
          />
          <FeatureCard
            icon={<Target className="h-8 w-8 text-blue-600" />}
            title="Goal Setting"
            description="Define your trading goals and track your progress over time."
          />
          <FeatureCard
            icon={<Shield className="h-8 w-8 text-blue-600" />}
            title="Secure Storage"
            description="Keep your trading data safe with encrypted storage and automatic backups."
          />
          <FeatureCard
            icon={<Database className="h-8 w-8 text-blue-600" />}
            title="Multi-Asset Support"
            description="Support for various financial instruments including stocks, forex, and cryptocurrencies."
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;

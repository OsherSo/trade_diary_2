const BenefitCard = ({ title, description }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const BenefitsSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose Trading Journal Pro?
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <BenefitCard
            title="Structured Approach"
            description="Gain a disciplined and organized approach to your trading activities."
          />
          <BenefitCard
            title="Data-Driven Decisions"
            description="Improve decision-making through comprehensive historical trade analysis."
          />
          <BenefitCard
            title="Strategy Optimization"
            description="Identify strengths and weaknesses in your trading strategies."
          />
          <BenefitCard
            title="Continuous Improvement"
            description="Enhance consistency and profitability over time with actionable insights."
          />
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;

import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <div className="bg-blue-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          Ready to Elevate Your Trading Performance?
        </h2>
        <Link
          to="/register"
          className="inline-block px-8 py-3 text-lg font-medium rounded-lg text-blue-600 bg-white hover:bg-gray-100"
        >
          Get Started Now
        </Link>
      </div>
    </div>
  );
};

export default CTASection;

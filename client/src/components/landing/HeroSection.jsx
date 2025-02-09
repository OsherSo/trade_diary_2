import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Master Your Trading Journey
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl lg:mx-0">
          Comprehensive digital journal designed for traders to record, analyze,
          and optimize their trading activities
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            to="/register"
            className="px-8 py-3 text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700"
          >
            Start Trading Journal
            <ArrowRight className="inline-block ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

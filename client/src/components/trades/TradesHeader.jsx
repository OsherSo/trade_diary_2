import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TradesHeader = ({ diary }) => {
  const { name, description } = diary;
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
      <button
        onClick={() => navigate("new")}
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
      >
        <Plus className="w-5 h-5" />
        New Trade
      </button>
    </div>
  );
};

export default TradesHeader;

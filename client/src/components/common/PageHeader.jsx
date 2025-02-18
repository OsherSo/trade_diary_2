import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PageHeader = ({
  title,
  description,
  actionLabel = "New",
  actionPath,
  showAction = true,
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        {description && <p className="text-gray-600 mt-1">{description}</p>}
      </div>
      {showAction && (
        <button
          onClick={() => navigate(actionPath)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <Plus className="w-5 h-5" />
          {actionLabel}
        </button>
      )}
    </div>
  );
};

export default PageHeader;

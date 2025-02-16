import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Edit2, Trash2, Calendar, DollarSign, Globe } from "lucide-react";

import { ActionBtn } from "../common";
import ConfirmationDialog from "./ConfirmationDialog";

const DiaryCard = ({ diary }) => {
  const navigate = useNavigate();
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleClick = () => {
    navigate(`${diary._id}/trades`);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    navigate(`edit/${diary._id}`);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    setShowDeleteConfirmation(true);
  };

  return (
    <>
      <div
        className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-200 cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              {diary.name}
            </h3>
            <p className="text-gray-500 mt-1 flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {formatDate(diary.createdAt)}
            </p>
          </div>
          <div className="flex gap-2">
            <ActionBtn
              action={handleEdit}
              style="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
            >
              <Edit2 className="w-4 h-4" />
            </ActionBtn>
            <ActionBtn
              action={handleDelete}
              style="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
            >
              <Trash2 className="w-4 h-4" />
            </ActionBtn>
          </div>
        </div>

        <p className="text-gray-600 mb-4">
          {diary.description || "No description provided"}
        </p>

        <div className="space-y-2">
          <div className="flex items-center text-gray-600">
            <Globe className="w-4 h-4 mr-2" />
            <span>{diary.platform}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <DollarSign className="w-4 h-4 mr-2" />
            <span>Initial Balance: {formatCurrency(diary.initialBalance)}</span>
          </div>
          {diary.currentBalance && (
            <div className="flex items-center text-gray-600">
              <DollarSign className="w-4 h-4 mr-2" />
              <span>
                Current Balance: {formatCurrency(diary.currentBalance)}
              </span>
            </div>
          )}
        </div>
      </div>

      <ConfirmationDialog
        isOpen={showDeleteConfirmation}
        onClose={() => setShowDeleteConfirmation(false)}
        diaryId={diary._id}
        diaryName={diary.name}
      />
    </>
  );
};

export default DiaryCard;

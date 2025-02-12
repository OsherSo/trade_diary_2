import { Form } from "react-router-dom";
import { AlertCircle } from "lucide-react";

const ConfirmationDialog = ({ isOpen, onClose, diaryId, diaryName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-lg w-full max-w-md p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-2 bg-red-100 rounded-full">
              <AlertCircle className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">
              Delete Diary
            </h2>
          </div>

          <p className="text-gray-600 mb-6">
            Are you sure you want to delete &quot;{diaryName}&quot;? This action
            cannot be undone.
          </p>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
            >
              Cancel
            </button>
            <Form method="post" action={`delete/${diaryId}`} className="flex-1">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium"
              >
                Delete
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;

import { X } from "lucide-react";
import { Form, useNavigate } from "react-router-dom";

import { FormRow, SubmitBtn } from "../components/common";

const AddDiary = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/dashboard/diaries");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />
      <div className="fixed inset-0 z-10 flex items-center justify-center p-4">
        <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md transform transition-all duration-300 scale-100">
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
          <div className="p-6">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900">
                Create New Diary
              </h2>
              <p className="mt-1 text-gray-500">
                Add a new trading diary to track your trades
              </p>
            </div>
            <Form method="post" className="space-y-6">
              <div className="space-y-4">
                <FormRow
                  type="text"
                  name="name"
                  labelText="Diary Name"
                  labelStyle="block text-sm font-medium text-gray-700 mb-1"
                  inputStyle="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                />
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Description
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    placeholder="Write a brief description of your trading diary..."
                  />
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
                >
                  Cancel
                </button>
                <SubmitBtn
                  text="Create Diary"
                  style="flex-1 bg-blue-600 text-white py-2.5 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium disabled:bg-blue-400"
                />
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDiary;

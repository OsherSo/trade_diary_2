import { X } from "lucide-react";
import { Form, useNavigate } from "react-router-dom";
import { useState } from "react";

import { FormRow, SubmitBtn } from "../components/common";

const AddTrade = () => {
  const navigate = useNavigate();
  const [tradeType, setTradeType] = useState("long");

  const handleClose = () => {
    navigate(-1);
  };

  const RequiredLabel = ({ children }) => (
    <span className="flex items-center gap-1">
      {children}
      <span className="text-red-500">*</span>
    </span>
  );

  const OptionalLabel = ({ children }) => (
    <span className="flex items-center gap-1">
      {children}
      <span className="text-sm text-gray-500">(optional)</span>
    </span>
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />
      <div className="fixed inset-0 z-10 flex items-center justify-center p-4">
        <div className="relative bg-white rounded-xl shadow-xl w-full max-w-2xl transform transition-all duration-300 scale-100 max-h-[90vh] overflow-y-auto">
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
          <div className="p-6">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900">
                Add New Trade
              </h2>
              <p className="mt-1 text-gray-500">
                Record a new trade in your trading journal
              </p>
              <p className="mt-4 text-sm text-gray-600">
                Fields marked with <span className="text-red-500">*</span> are
                required
              </p>
            </div>

            <Form method="post" className="space-y-6">
              {/* Required Fields Section */}
              <div className="space-y-6">
                {/* Trade Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <RequiredLabel>Trade Type</RequiredLabel>
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="type"
                        value="long"
                        checked={tradeType === "long"}
                        onChange={(e) => setTradeType(e.target.value)}
                        className="mr-2"
                        required
                      />
                      Long
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="type"
                        value="short"
                        checked={tradeType === "short"}
                        onChange={(e) => setTradeType(e.target.value)}
                        className="mr-2"
                      />
                      Short
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Symbol */}
                  <FormRow
                    type="text"
                    name="symbol"
                    labelText={<RequiredLabel>Symbol</RequiredLabel>}
                    labelStyle="block text-sm font-medium text-gray-700 mb-1"
                    inputStyle="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required={true}
                  />

                  {/* Entry Date */}
                  <FormRow
                    type="date"
                    name="entryDate"
                    labelText={<RequiredLabel>Entry Date</RequiredLabel>}
                    labelStyle="block text-sm font-medium text-gray-700 mb-1"
                    inputStyle="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required={true}
                  />

                  {/* Entry Price */}
                  <FormRow
                    type="number"
                    name="entryPrice"
                    labelText={<RequiredLabel>Entry Price</RequiredLabel>}
                    labelStyle="block text-sm font-medium text-gray-700 mb-1"
                    inputStyle="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    step="0.01"
                    min="0.01"
                    required={true}
                  />

                  {/* Quantity */}
                  <FormRow
                    type="number"
                    name="quantity"
                    labelText={<RequiredLabel>Quantity</RequiredLabel>}
                    labelStyle="block text-sm font-medium text-gray-700 mb-1"
                    inputStyle="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    step="1"
                    min="1"
                    required={true}
                  />
                </div>
              </div>

              {/* Optional Fields Section */}
              <div className="space-y-6 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">
                  Additional Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Exit Date */}
                  <FormRow
                    type="date"
                    name="exitDate"
                    labelText={<OptionalLabel>Exit Date</OptionalLabel>}
                    labelStyle="block text-sm font-medium text-gray-700 mb-1"
                    inputStyle="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />

                  {/* Exit Price */}
                  <FormRow
                    type="number"
                    name="exitPrice"
                    labelText={<OptionalLabel>Exit Price</OptionalLabel>}
                    labelStyle="block text-sm font-medium text-gray-700 mb-1"
                    inputStyle="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    step="0.01"
                    min="0.01"
                  />

                  {/* Stop Loss */}
                  <FormRow
                    type="number"
                    name="stopLoss"
                    labelText={<OptionalLabel>Stop Loss</OptionalLabel>}
                    labelStyle="block text-sm font-medium text-gray-700 mb-1"
                    inputStyle="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    step="0.01"
                    min="0.01"
                  />

                  {/* Take Profit */}
                  <FormRow
                    type="number"
                    name="profitTarget"
                    labelText={<OptionalLabel>Take Profit</OptionalLabel>}
                    labelStyle="block text-sm font-medium text-gray-700 mb-1"
                    inputStyle="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    step="0.01"
                    min="0.01"
                  />

                  {/* Fees */}
                  <FormRow
                    type="number"
                    name="fees"
                    labelText={<OptionalLabel>Fees</OptionalLabel>}
                    labelStyle="block text-sm font-medium text-gray-700 mb-1"
                    inputStyle="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    step="0.01"
                    min="0"
                  />
                </div>

                {/* Notes */}
                <div>
                  <label
                    htmlFor="notes"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    <OptionalLabel>Notes</OptionalLabel>
                  </label>
                  <textarea
                    name="notes"
                    id="notes"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Add any notes about your trade setup, strategy, or observations..."
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
                  text="Add Trade"
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

export default AddTrade;

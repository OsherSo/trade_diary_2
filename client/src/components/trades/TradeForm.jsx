import { useState } from "react";
import { Form } from "react-router-dom";

import TradeTypeSelector from "./TradeTypeSelector";
import { FormRow, SubmitBtn, RequiredLabel, OptionalLabel } from "../common";

const TradeForm = ({
  onCancel,
  defaultValues = {},
  submitButtonText = "Add Trade",
}) => {
  const [tradeType, setTradeType] = useState(defaultValues.type || "long");

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toISOString().split("T")[0];
  };

  return (
    <Form method="post" className="space-y-6">
      {/* Required Fields Section */}
      <div className="space-y-6">
        <TradeTypeSelector value={tradeType} onChange={setTradeType} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormRow
            type="text"
            name="symbol"
            labelText={<RequiredLabel>Symbol</RequiredLabel>}
            labelStyle="block text-sm font-medium text-gray-700 mb-1"
            inputStyle="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            defaultValue={defaultValues.symbol}
            required={true}
          />

          <FormRow
            type="date"
            name="entryDate"
            labelText={<RequiredLabel>Entry Date</RequiredLabel>}
            labelStyle="block text-sm font-medium text-gray-700 mb-1"
            inputStyle="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            defaultValue={formatDate(defaultValues.entryDate)}
            required={true}
          />

          <FormRow
            type="number"
            name="entryPrice"
            labelText={<RequiredLabel>Entry Price</RequiredLabel>}
            labelStyle="block text-sm font-medium text-gray-700 mb-1"
            inputStyle="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            step="0.01"
            min="0.01"
            defaultValue={defaultValues.entryPrice}
            required={true}
          />

          <FormRow
            type="number"
            name="quantity"
            labelText={<RequiredLabel>Quantity</RequiredLabel>}
            labelStyle="block text-sm font-medium text-gray-700 mb-1"
            inputStyle="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            step="1"
            min="1"
            defaultValue={defaultValues.quantity}
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
          <FormRow
            type="date"
            name="exitDate"
            labelText={<OptionalLabel>Exit Date</OptionalLabel>}
            labelStyle="block text-sm font-medium text-gray-700 mb-1"
            inputStyle="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            defaultValue={formatDate(defaultValues.exitDate)}
          />

          <FormRow
            type="number"
            name="exitPrice"
            labelText={<OptionalLabel>Exit Price</OptionalLabel>}
            labelStyle="block text-sm font-medium text-gray-700 mb-1"
            inputStyle="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            step="0.01"
            min="0.01"
            defaultValue={defaultValues.exitPrice}
          />

          <FormRow
            type="number"
            name="stopLoss"
            labelText={<OptionalLabel>Stop Loss</OptionalLabel>}
            labelStyle="block text-sm font-medium text-gray-700 mb-1"
            inputStyle="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            step="0.01"
            min="0.01"
            defaultValue={defaultValues.stopLoss}
          />

          <FormRow
            type="number"
            name="profitTarget"
            labelText={<OptionalLabel>Take Profit</OptionalLabel>}
            labelStyle="block text-sm font-medium text-gray-700 mb-1"
            inputStyle="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            step="0.01"
            min="0.01"
            defaultValue={defaultValues.profitTarget}
          />

          <FormRow
            type="number"
            name="fees"
            labelText={<OptionalLabel>Fees</OptionalLabel>}
            labelStyle="block text-sm font-medium text-gray-700 mb-1"
            inputStyle="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            step="0.01"
            min="0"
            defaultValue={defaultValues.fees}
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
            defaultValue={defaultValues.notes}
          />
        </div>
      </div>

      <div className="flex gap-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
        >
          Cancel
        </button>
        <SubmitBtn
          text={submitButtonText}
          style="flex-1 bg-blue-600 text-white py-2.5 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium disabled:bg-blue-400"
        />
      </div>
    </Form>
  );
};

export default TradeForm;

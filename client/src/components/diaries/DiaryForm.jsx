import { Form } from "react-router-dom";
import { FormRow, SubmitBtn } from "../common";

const DiaryForm = ({ onCancel, defaultValues = {} }) => {
  return (
    <Form method="post" className="space-y-6">
      <div className="space-y-4">
        <FormRow
          type="text"
          name="name"
          labelText="Diary Name"
          labelStyle="block text-sm font-medium text-gray-700 mb-1"
          inputStyle="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
          defaultValue={defaultValues.name}
          required={true}
        />

        <FormRow
          type="text"
          name="platform"
          labelText="Trading Platform"
          labelStyle="block text-sm font-medium text-gray-700 mb-1"
          inputStyle="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
          defaultValue={defaultValues.platform}
          required={true}
        />

        <FormRow
          type="number"
          name="initialBalance"
          labelText="Initial Balance"
          labelStyle="block text-sm font-medium text-gray-700 mb-1"
          inputStyle="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
          step="0.01"
          min="0.01"
          defaultValue={defaultValues.initialBalance}
          required={true}
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
            defaultValue={defaultValues.description}
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
          text={defaultValues?.name ? "Save Changes" : "Create Diary"}
          style="flex-1 bg-blue-600 text-white py-2.5 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium disabled:bg-blue-400"
        />
      </div>
    </Form>
  );
};

export default DiaryForm;

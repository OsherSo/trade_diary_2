import { RequiredLabel } from "../common";

const TradeTypeSelector = ({ value, onChange }) => {
  return (
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
            checked={value === "long"}
            onChange={(e) => onChange(e.target.value)}
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
            checked={value === "short"}
            onChange={(e) => onChange(e.target.value)}
            className="mr-2"
          />
          Short
        </label>
      </div>
    </div>
  );
};

export default TradeTypeSelector;

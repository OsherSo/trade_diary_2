import { Plus } from "lucide-react";

import { ActionBtn } from "../common";

const DiariesHeader = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Trading Diaries</h1>
        <p className="text-gray-600 mt-1">Manage your trading journals</p>
      </div>
      <ActionBtn
        action={() => {}}
        style="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
      >
        <Plus className="w-5 h-5" />
        New Diary
      </ActionBtn>
    </div>
  );
};

export default DiariesHeader;

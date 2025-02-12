import { Book } from "lucide-react";

const EmptyPage = () => {
  return (
    <div className="text-center py-12">
      <Book className="w-12 h-12 text-gray-400 mx-auto mb-4" />
      <h3 className="text-lg font-medium text-gray-900 mb-2">No diaries yet</h3>
      <p className="text-gray-600">
        Create your first trading diary to start tracking your trades
      </p>
    </div>
  );
};

export default EmptyPage;

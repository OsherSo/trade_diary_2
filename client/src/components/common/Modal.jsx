import { X } from "lucide-react";

const Modal = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  wide = false,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div className="fixed inset-0 z-10 flex items-center justify-center p-4">
        <div
          className={`relative bg-white rounded-xl shadow-xl w-full ${wide ? "max-w-4xl" : "max-w-md"} transform transition-all duration-300 scale-100`}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
          <div className="p-6">
            {(title || description) && (
              <div className="mb-8">
                {title && (
                  <h2 className="text-2xl font-semibold text-gray-900">
                    {title}
                  </h2>
                )}
                {description && (
                  <p className="mt-1 text-gray-500">{description}</p>
                )}
              </div>
            )}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

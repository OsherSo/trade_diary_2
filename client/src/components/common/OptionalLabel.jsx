const OptionalLabel = ({ children }) => (
  <span className="flex items-center gap-1">
    {children}
    <span className="text-sm text-gray-500">(optional)</span>
  </span>
);

export default OptionalLabel;

const RequiredLabel = ({ children }) => (
  <span className="flex items-center gap-1">
    {children}
    <span className="text-red-500">*</span>
  </span>
);

export default RequiredLabel;

const EmptyPage = ({ title, content, children }) => {
  return (
    <div className="text-center py-12">
      {children}
      <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default EmptyPage;

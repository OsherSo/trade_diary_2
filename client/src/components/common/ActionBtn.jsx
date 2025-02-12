const ActionBtn = ({ action, style, children }) => {
  return (
    <button onClick={action} className={style}>
      {children}
    </button>
  );
};

export default ActionBtn;

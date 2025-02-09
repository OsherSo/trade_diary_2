const FormRow = ({
  type,
  name,
  labelText,
  labelStyle,
  inputStyle,
  defaultValue = "",
}) => {
  return (
    <div>
      <label htmlFor={name} className={labelStyle}>
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className={inputStyle}
        defaultValue={defaultValue}
        required
      />
    </div>
  );
};

export default FormRow;

const FormRow = ({
  type,
  name,
  labelText,
  labelStyle,
  inputStyle,
  step,
  min,
  max,
  defaultValue = "",
  required = false,
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
        step={step}
        min={min}
        max={max}
        required={required}
      />
    </div>
  );
};

export default FormRow;

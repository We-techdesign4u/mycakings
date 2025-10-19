import React from "react";

const FormFieldText = ({
  title,
  placeholder,
  value,
  name,
  handleChangeText,
  keyboardType,
  type,
  border,
  multiple,
  fieldtype,
}) => {
  return (
    <div>
      <p className="text-secondary3 font-Lato font-semibold mb-1">{title}</p>
      <input
        className={`bg-white w-[325px] sm:w-[400px] h-[40px] rounded-sm pl-2 ${border}`}
        type="text"
        value={value}
        name={name}
        onChange={handleChangeText}
        placeholder={placeholder}
        multiple={multiple}
        fieldtype={fieldtype}
      />
    </div>
  );
};

export default FormFieldText;

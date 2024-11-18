import React from "react";

const Input = ({
  value,
  type,
  className,
  placeholder,
  setChange,
}: {
  value: string;
  type: string;
  className: string;
  placeholder: string;
  setChange: (value: string) => void;
}) => {
  console.log("🚀 ~ value:", value);
  console.log("🚀 ~ setChange:", setChange);
  console.log("🚀 ~ placeholder:", placeholder);
  console.log("🚀 ~ className:", className);
  console.log("🚀 ~ type:", type);

  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      onChange={(e) => setChange(e.target.value)}
      value={value}
    />
  );
};

export default Input;

import React from "react";

type FormControlsProps = {
  type?: string;
  name: string;
  value?: string | number;
  placeholder: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
};

const FormControls = ({ type = "text", name, placeholder, value, required = false, handleChange }: FormControlsProps) => {
  return (
    <input
      className="px-4 py-6 lg:text-lg font-medium rounded-[8px] placeholder:text-neutral-300 focus:outline-amber-500 focus:outline-3 w-full cursor-target"
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={(e) => {
        if (!e.target.value.trim()) return false;
        handleChange && handleChange(e);
      }}
      value={value}
      required={required}
      style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
    />
  );
};

export const TextAreaControls = ({ name, placeholder, value, required = false, handleChange }: FormControlsProps) => {
  return (
    <textarea
      className="px-4 py-6 lg:text-lg font-medium rounded-[8px] placeholder:text-neutral-300 focus:outline-amber-500 focus:outline-3 w-full cursor-target"
      name={name}
      placeholder={placeholder}
      onChange={(e) => {
        if (!e.target.value.trim()) return false;
        handleChange && handleChange(e);
      }}
      style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
      required={required}
      value={value}
    ></textarea>
  );
};

export default FormControls;

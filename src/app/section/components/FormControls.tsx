import React from "react";

type FormControlsProps = {
  type?: string;
  name: string;
  placeholder: string;
};

const FormControls = ({ type = "text", name, placeholder }: FormControlsProps) => {
  return (
    <input
      className="px-4 py-6 lg:text-lg font-medium rounded-[8px] placeholder:text-neutral-300 focus:outline-amber-500 focus:outline-3 w-full cursor-target"
      type={type}
      name={name}
      placeholder={placeholder}
      style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
    />
  );
};

export const TextAreaControls = ({ name, placeholder }: FormControlsProps) => {
  return (
    <textarea
      className="px-4 py-6 lg:text-lg font-medium rounded-[8px] placeholder:text-neutral-300 focus:outline-amber-500 focus:outline-3 w-full cursor-target"
      name={name}
      placeholder={placeholder}
      style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
    ></textarea>
  );
};

export default FormControls;

import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  label,
  onClick,
  disabled,
  loading,
  className,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`bg-muted-dark border border-border text-white py-2 px-4 rounded cursor-pointer ${
        disabled ? "opacity-50 cursor-not-allowed text-border" : ""
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? "Loading..." : label}
    </button>
  );
};

export default Button;

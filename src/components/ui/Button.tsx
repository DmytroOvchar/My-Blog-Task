"use client";

import clsx from "clsx";

import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "border border-[#696A754D] rounded-md py-3 px-5 font-medium text-[#696A75] hover:bg-[#f1f1f1]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

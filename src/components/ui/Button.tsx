import * as React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outlined"
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    const buttonClass = clsx(
      "py-3 px-5 uppercase transition duration-300 rounded-[50px] text-sm",
      variant === "primary" &&
        "bg-primary text-white font-bold hover:bg-primary/85",
      variant === "outlined" &&
        "bg-transparent text-primary border border-primary hover:bg-primary hover:text-white"
    );

    return (
      <button
        className={twMerge(buttonClass, className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };

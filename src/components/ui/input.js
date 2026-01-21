import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(
  ({ className, type, variant = "primary", ...props }, ref) => {
    const inputVariants = {
      primary:
        "border border-gray-300 bg-white text-gray-800 placeholder:text-gray-500  focus:ring-mx-green focus:border-mx-green",
      secondary:
        "border-[#E2E4F0] bg-[#F5F6FD] text-[#14162E] placeholder:text-[#7A7F8F] focus:ring-[#C2C6DA] focus:border-[#C2C6DA]",
    };

    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-sm px-3 py-2 text-base ring-offset-0 focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all duration-200",
          inputVariants[variant],
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
export { Input };

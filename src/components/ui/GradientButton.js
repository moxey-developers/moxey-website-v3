import * as React from "react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "font-inter flex cursor-pointer items-center justify-center text-base font-medium transition-all duration-200 ease-in-out rounded-sm max-w-none",
  {
    variants: {
      variant: {
        default:
          "text-white bg-[#22B470] shadow-[0_9px_13px_-5px_rgba(34,180,112,0.4),0_2px_2px_0_rgba(34,180,112,0.25),inset_0_-2px_0_0_rgba(34,180,112,0.5),inset_0_0_0_1px_rgba(255,255,255,0.2),inset_0_7px_12px_0_rgba(128,0,128,0.3)] border border-[#1D9D64] hover:bg-[#1D9D64] hover:shadow-[0_9px_15px_-5px_rgba(34,180,112,0.5),0_3px_3px_0_rgba(34,180,112,0.3),inset_0_-2px_0_0_rgba(34,180,112,0.6),inset_0_0_0_1px_rgba(255,255,255,0.3),inset_0_8px_14px_0_rgba(128,0,128,0.4)]",
        secondary:
          "text-[#14162E] bg-[#F5F6FD] shadow-[0_9px_13px_-5px_rgba(245,246,253,0.4),0_2px_2px_0_rgba(245,246,253,0.25),inset_0_-2px_0_0_rgba(245,246,253,0.5),inset_0_0_0_1px_rgba(255,255,255,0.2),inset_0_7px_12px_0_rgba(200,200,200,0.3)] border border-[#E2E4F0] hover:bg-[#E2E4F0] hover:shadow-[0_9px_15px_-5px_rgba(245,246,253,0.5),0_3px_3px_0_rgba(245,246,253,0.3),inset_0_-2px_0_0_rgba(245,246,253,0.6),inset_0_0_0_1px_rgba(255,255,255,0.3),inset_0_8px_14px_0_rgba(200,200,200,0.4)]",
        dark: "text-white bg-[#14162E] shadow-[0_9px_13px_-5px_rgba(20,22,46,0.4),0_2px_2px_0_rgba(20,22,46,0.25),inset_0_-2px_0_0_rgba(20,22,46,0.5),inset_0_0_0_1px_rgba(255,255,255,0.2),inset_0_7px_12px_0_rgba(0,0,0,0.3)] border border-[#10122B] hover:bg-[#10122B] hover:shadow-[0_9px_15px_-5px_rgba(20,22,46,0.5),0_3px_3px_0_rgba(20,22,46,0.3),inset_0_-2px_0_0_rgba(20,22,46,0.6),inset_0_0_0_1px_rgba(255,255,255,0.3),inset_0_8px_14px_0_rgba(0,0,0,0.4)]",
      },
      size: {
        default: "h-10 px-3 py-2",
        sm: "h-9 rounded-md px-3 text-sm",
        lg: "h-11 px-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const GradientButton = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

GradientButton.displayName = "GradientButton";

export default GradientButton;

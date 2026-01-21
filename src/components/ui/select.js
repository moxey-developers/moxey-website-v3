"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <SelectPrimitive.Trigger
      ref={ref}
      className={cn(
        "h-10 text-[#14162E] bg-[#F5F6FD] shadow-[0_9px_13px_-5px_rgba(245,246,253,0.4),0_2px_2px_0_rgba(245,246,253,0.25),inset_0_-2px_0_0_rgba(245,246,253,0.5),inset_0_0_0_1px_rgba(255,255,255,0.2),inset_0_7px_12px_0_rgba(200,200,200,0.3)] border border-[#E2E4F0] hover:bg-[#E2E4F0] hover:shadow-[0_9px_15px_-5px_rgba(245,246,253,0.5),0_3px_3px_0_rgba(245,246,253,0.3),inset_0_-2px_0_0_rgba(245,246,253,0.6),inset_0_0_0_1px_rgba(255,255,255,0.3),inset_0_8px_14px_0_rgba(200,200,200,0.4)] rounded-sm px-3 py-2 text-base flex justify-between items-center",
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDown className="h-4 w-4 opacity-50 ml-2" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  ),
);

const SelectContent = React.forwardRef(
  ({ className, children, position = "popper", ...props }, ref) => (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        className={cn(
          "relative z-[1000] max-h-96 min-w-[8rem] overflow-hidden rounded-md bg-[#F5F6FD] border border-[#E2E4F0] shadow-[0_4px_10px_rgba(0,0,0,0.1)] p-1",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className,
        )}
        position={position}
        {...props}
      >
        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "w-full min-w-[var(--radix-select-trigger-width)]",
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  ),
);

const SelectItem = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <SelectPrimitive.Item
      ref={ref}
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-[#E2E4F0] focus:text-[#14162E] data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </SelectPrimitive.ItemIndicator>
      </span>

      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  ),
);

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
};

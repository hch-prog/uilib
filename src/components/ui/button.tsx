import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// Button variants using CVA (class-variance-authority)
const buttonVariants = cva(
  "inline-flex justify-center items-center gap-3 disabled:opacity-50 rounded-md font-medium text-sm transition-all disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-md hover:from-blue-600 hover:to-blue-800 focus:ring-blue-500", // Gradient Background
        destructive:
          "bg-gradient-to-r from-red-500 to-red-700 text-white shadow-md hover:from-red-600 hover:to-red-800 focus:ring-red-500", // Gradient Background
        outline:
          "border border-gray-300 text-gray-700 bg-white shadow-sm hover:bg-gray-100 focus:ring-gray-400", // Classic Outline
        secondary:
          "bg-gray-600 text-white shadow-md hover:bg-gray-700 focus:ring-gray-700", // Standard Secondary
        ghost:
          "bg-transparent text-gray-600 hover:bg-gray-100 focus:ring-gray-400", // Ghost effect
        link:
          "text-blue-600 underline-offset-4 hover:underline text-sm font-medium", // Link style
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 px-4 text-xs",
        lg: "h-12 px-8 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <motion.div
        whileHover={{
          scale: 1.05, // Slight scale effect for better interaction
          borderRadius: "8px", // Slightly adjust border radius on hover for a modern feel
        }}
        whileTap={{
          scale: 0.97, // Slight shrink on tap to simulate a button press
          borderRadius: "6px", // Slight decrease in border radius for a more "pressed" look
        }}
        className="relative overflow-hidden group"
      >
        <Comp
          className={cn(
            buttonVariants({ variant, size, className }),
            "relative z-10 group-hover:opacity-90 focus:outline-none"
          )}
          ref={ref}
          {...props}
        />

        {/* Hover effect with background transition */}
        <motion.div
          className="top-0 left-0 absolute bg-white/10 opacity-0 group-hover:opacity-30 w-full h-full transition-all"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.3 }} // Adding a frosted glass effect
        />
      </motion.div>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };

"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { inter } from "@/constants/Fonts";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  icon,
  onClick,
  className = "",
  disabled = false,
}: ButtonProps) => {
  const baseClasses =
    "group hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 md:gap-4 relative overflow-hidden font-semibold";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-4 md:px-8 md:py-4 text-sm md:text-base",
    lg: "px-8 py-5 md:px-10 md:py-5 text-base md:text-lg",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg hover:shadow-xl",
    secondary:
      "bg-white text-gray-900 border-2 border-amber-200 hover:bg-amber-50 hover:border-amber-300 hover:shadow-lg",
    outline:
      "bg-transparent text-gray-900 border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400",
  };

  const shimmerClasses = {
    primary: "bg-gradient-to-r from-white/0 via-white/20 to-white/0",
    secondary:
      "bg-gradient-to-r from-amber-500/0 via-amber-500/10 to-amber-500/0",
    outline: "bg-gradient-to-r from-gray-500/0 via-gray-500/10 to-gray-500/0",
  };

  const roundedClasses = {
    sm: "rounded-lg",
    md: "rounded-full",
    lg: "rounded-full",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${roundedClasses[size]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
      style={{ fontFamily: inter.style.fontFamily }}
    >
      <div
        className={`absolute inset-0 ${shimmerClasses[variant]} translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000`}
      />
      {icon && <span className="relative z-10">{icon}</span>}
      <div className="flex flex-col relative z-10">
        <span
          className={`${
            variant === "primary" ? "text-white" : "text-gray-900"
          } group-hover:${
            variant === "primary" ? "text-white" : "text-gray-900"
          } transition-colors`}
        >
          {children}
        </span>
      </div>
    </motion.button>
  );
};

export default Button;

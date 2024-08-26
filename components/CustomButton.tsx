"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";
function CustomButton({ title, className, btnType, handleClick }: CustomButtonProps) {
  return (
    <button type={btnType} className={`custom-btn ${className}`} onClick={handleClick}>
      <span className={`flex-1`}>{title}</span>
    </button>
  );
}

export default CustomButton;

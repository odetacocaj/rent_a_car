"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";
function CustomButton({
  title,
  className,
  btnType,
  handleClick,
  textStyles,
  rightIcon,
  isDisabled,
}: CustomButtonProps) {
  return (
    <button type={btnType} className={`custom-btn ${className}`} onClick={handleClick}>
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image src={rightIcon} alt="Right Icon" fill className="object-contain" />
        </div>
      )}
    </button>
  );
}

export default CustomButton;

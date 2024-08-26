import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  className?: string;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

import { ChangeEvent } from "react";

export interface InputProps {
  placeholder?: string;
  name?: string;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  type?: "text" | "password";
  error?: string | undefined;
}
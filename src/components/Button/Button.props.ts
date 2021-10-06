import React, { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  color?: 'primary' | 'secondary' | 'succsess' | 'warning' | 'danger' | 'info';
  type?: 'button' | 'icon';
  onClick?: () => void;
}
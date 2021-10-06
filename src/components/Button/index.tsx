import React, { FC } from 'react';
import { ButtonProps } from './Button.props';
import cn from 'classnames';
import styles from './Button.module.scss';
import PulseLoader from 'react-spinners/PulseLoader';
import { DiReact } from 'react-icons/di';

export const Button: FC<ButtonProps> = ({ children, loading, disabled, color = 'primary', type = 'button' }: ButtonProps) => {
  const buttonLoading = loading ? <PulseLoader size={8} color="#FFF" /> : children;

  const buttonType = type === 'button' ? buttonLoading : < DiReact size={25} color="#FFF" />;

  return (
    <button className={cn(styles.button, styles[color], {
      [styles.loading]: loading,
      [styles.icon]: type === 'icon'
    })}
      disabled={disabled}
    >
      {buttonType}
    </button>
  );
}
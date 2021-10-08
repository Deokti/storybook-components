import { FC } from "react";
import styles from './Input.module.scss';
import cn from 'classnames';
import { InputProps } from "./Input.props";
import { CgSearch } from 'react-icons/cg';

export const Input: FC<InputProps> = ({ placeholder = '', name = '', type = 'text', value = '', onChange }: InputProps) => {
  return (
    <label className={cn(styles.label)}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={cn(styles.input)}
      />
      <CgSearch className={cn(styles.icon, {
        [styles.isValue]: value.length > 0
      })} size={20}
      />
    </label>
  )
}
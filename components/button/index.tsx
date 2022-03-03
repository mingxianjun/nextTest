import React from "react";
import styles from './style.module.scss';

type ButtonType = 'default' | 'primary' | 'disable' | 'warning';
type ButtonHTMLType = 'submit' | 'button' | 'reset';
type ButtonSize = '' | 'small' | 'middle' | 'large';

export interface ButtonProps extends Pick<React.ButtonHTMLAttributes<any>, 'onClick' | 'title' | 'id'> {
  type?: ButtonType,
  size?: ButtonSize,
  htmlType?: ButtonHTMLType,
  loading?: boolean,
  children?: React.ReactNode
}

export const Button = ({
                         children,
                         htmlType = 'button',
                         type = 'default',
                         size = '',
                         loading = false,
                         ...restProps
                       }: ButtonProps) => {
  return (
    <button type={htmlType}
            className={
              styles.ui + ' ' +
              styles[type] +
              (size ? ' ' + styles[size] : '') +
              (loading ? ' ' + styles['loading'] : '')
            }
            {...restProps}>
      {children || null}
    </button>
  )
}
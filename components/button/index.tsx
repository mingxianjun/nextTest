import React from "react";

type ButtonType = 'default' | 'primary' | 'disable' | 'warning';
type ButtonHTMLType = 'submit' | 'button' | 'reset';
type ButtonSize = 'default' | 'small' | 'middle' | 'large';

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
                         size = 'default',
                         loading = false,
                         ...restProps
                       }: ButtonProps) => {
  return (
    <button type={htmlType}
            className={type + ' ' + `size-${size}` + (loading ? ' loading' : '')}
            {...restProps}>
      {children || null}
    </button>
  )
}
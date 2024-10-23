import React from 'react';

/**
 * Props for the Button component.
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

/**
 * Reusable button component.
 * @component
 */
const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  disabled = false,
}) => (
  <button onClick={onClick} disabled={disabled}>
    {label}
  </button>
);

export default Button;

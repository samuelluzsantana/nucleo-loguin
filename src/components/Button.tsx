import React, { ReactNode } from 'react';

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled = false, children }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className='w-full h-[4.5em] text-white bg-loguin-red rounded-full hover:bg-loguin-red-dark transition-all	duration-500 font-medium'
    >
      {children}
    </button>
  );
};

export default Button;

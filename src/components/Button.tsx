import React, { ReactNode } from 'react'

interface ButtonProps {
  onClick?: () => void
  disabled?: boolean
  children: ReactNode
  type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled = false, children }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className='h-[4.5em] w-full rounded-full bg-loguin-red font-medium text-white transition-all duration-500 hover:bg-loguin-red-dark'
    >
      {children}
    </button>
  )
}

export default Button

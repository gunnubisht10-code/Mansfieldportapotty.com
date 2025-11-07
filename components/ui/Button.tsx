import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  to?: string;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  // Fix: Add 'type' prop to allow standard button attributes like type="submit".
  type?: 'submit' | 'reset' | 'button';
}

const Button: React.FC<ButtonProps> = ({ to, href, onClick, children, variant = 'primary', className = '', type = 'button' }) => {
  const baseClasses = "inline-block text-center font-bold py-3 px-8 rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantClasses = variant === 'primary' 
    ? "bg-accent text-white hover:bg-green-600 focus:ring-green-500" 
    : "bg-secondary text-dark hover:bg-yellow-500 focus:ring-yellow-400";

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} type={type}>
      {children}
    </button>
  );
};

export default Button;

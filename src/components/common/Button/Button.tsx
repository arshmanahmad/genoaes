import React from 'react';

interface ButtonProps {
    text: string;
    variant: 'primary' | 'secondary';
    outlined?: boolean;
    onClick?: () => void;
    className?: string;
    icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ text, icon, variant, outlined = false, onClick, className = '' }) => {
    const baseStyles = 'flex items-center justify-between px-4 py-2 rounded focus:outline-none';
    const primaryStyles = outlined
        ? 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
        : 'bg-primary text-white hover:bg-blue-600';
    const secondaryStyles = outlined
        ? 'border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white'
        : 'bg-secondary text-white hover:bg-gray-600';

    const buttonStyles = variant === 'primary' ? primaryStyles : secondaryStyles;

    return (
        <button className={`${baseStyles} ${buttonStyles} ${className}`} onClick={onClick}>
            <span>{text}</span>
            {icon && <span className="ml-2">{icon}</span>}
        </button>
    );
};

export default Button;
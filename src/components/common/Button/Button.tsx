import React from 'react';

interface ButtonProps {
    text: string;
    variant?: 'primary' | 'secondary';
    outlined?: boolean;
    onClick?: () => void;
    className?: string;
    icon?: string;
    whiteOutlined?:boolean;
}

const Button: React.FC<ButtonProps> = ({ text, icon, variant, outlined = false, onClick, className = '',whiteOutlined=false }) => {
    const baseStyles = 'flex items-center justify-between px-4 py-4 rounded focus:outline-none';
    const primaryStyles = outlined
        ? `border ${whiteOutlined ? "border-[#fff] text-[#fff] hover:bg-white hover:text-[#000]" : "border-[#000] text-[#000] hover:bg-blue-500 hover:text-[#000]"}`
        : 'bg-primary text-white hover:bg-blue-600';
    const secondaryStyles = outlined
        ? `border ${whiteOutlined ? "border-[#fff] text-[#fff] hover:bg-white hover:text-[#000]" : "border-[#000] text-[#000] hover:bg-gray-500 hover:text-[#000]"}`
        : 'bg-secondary text-[#000] hover:bg-gray-600';

    const buttonStyles = variant === 'primary' ? primaryStyles : secondaryStyles;

    return (
        <button className={`${baseStyles} ${buttonStyles} ${className}`} onClick={onClick}>
            <span>{text}</span>
            {icon && <span className="ml-2"><img  src={icon} alt="" /></span>}
        </button>
    );
};

export default Button;
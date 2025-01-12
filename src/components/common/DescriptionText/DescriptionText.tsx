import React from 'react';

interface DescriptionTextProps {
    children: React.ReactNode;
    className?: string;
}

const DescriptionText: React.FC<DescriptionTextProps> = ({ children, className = '' }) => {
    return (
        <p className={`text-[1.8rem] text-primary mt-[1rem] ${className}`}>
            {children}
        </p>
    );
};

export default DescriptionText;
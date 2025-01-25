import React from "react";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    variant?: "primary" | "secondary" | "danger" | "outline";
    className?: string;
    style?: React.CSSProperties;
    type?: "button" | "submit" | "reset";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
    children,
    onClick,
    disabled = false,
    variant,
    className = "",
    style = {},
    type = "button",
    ...rest
}: ButtonProps) => {
    const variantStyles = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-600 text-white hover:bg-gray-700",
        danger: "bg-red-600 text-white hover:bg-red-700",
        outline: "bg-transparent text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white",
    };
    const disabledStyles = "opacity-50 cursor-not-allowed";

    return (
        <button
            type={type}
            onClick={disabled ? undefined : onClick}
            disabled={disabled}
            className={`px-4 py-2 rounded-md focus:outline-none cursor-pointer transition-all duration-200 ${variant && variantStyles[variant]} ${disabled ? disabledStyles : ""} ${className}`}
            style={style}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;

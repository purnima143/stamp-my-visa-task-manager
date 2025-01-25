import React from "react";

interface BadgeProps {
    title?: string;
    type?: "success" | "warning" | "error" | "info";
    customColor?: string;
    showDot?: boolean;
    icon?: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({
    title,
    type,
    customColor,
    showDot = false,
    icon,
}) => {
    const typeStyles = {
        success: "bg-green-100 text-green-700 ring-green-500/10",
        warning: "bg-yellow-100 text-yellow-700 ring-yellow-500/10",
        error: "bg-red-100 text-red-700 ring-red-500/10",
        info: "bg-blue-100 text-blue-700 ring-blue-500/10",
    };

    const dotStyles = {
        success: "bg-green-500",
        warning: "bg-yellow-500",
        error: "bg-red-500",
        info: "bg-blue-500",
    };

    const badgeStyles = customColor || typeStyles[type || "info"];
    const dotStyle = customColor ? customColor : dotStyles[type || "info"];

    return (
        <span
            className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${badgeStyles}`}
        >
            {showDot && <span className={`h-2 w-2 rounded-full ${dotStyle} mr-1`}></span>}

            {icon && <span className="mr-1">{icon}</span>}

            {title}
        </span>
    );
};

export default Badge;

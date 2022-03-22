import { ReactNode, ReactElement } from "react";
import { WebIcon } from "mendix";

export interface AlertProps {
    children?: ReactNode;
    className?: string;
    bootstrapStyle: "default" | "primary" | "success" | "info" | "warning" | "danger";
}

export interface IconProps {
    icon: WebIcon | null;
    className?: string;
    fallback?: ReactElement;
}
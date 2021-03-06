/**
 * This file was generated from Upload.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue } from "mendix";

export interface UploadProps<Style> {
    name: string;
    style: Style[];
    message: EditableValue<string>;
    onClick?: ActionValue;
}

export interface UploadPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    message: string;
    onClick: {} | null;
}

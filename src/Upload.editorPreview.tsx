import { parseStyle } from "./piw-utils-internal";
import { createElement } from "react";
import { UploadPreviewProps } from "../typings/UploadProps";

declare function require(name: string): string;

export function preview(props: UploadPreviewProps) {
    return <div style={parseStyle(props.style)}></div>;
}

export function getPreviewCss(): string {
    return require("./ui/index.scss");
}

import { Properties, StructurePreviewProps, transformGroupsIntoTabs } from "./piw-utils-internal";
import { UploadPreviewProps } from "../typings/UploadProps";

export function getProperties(
    values: UploadPreviewProps,
    defaultProperties: Properties,
    platform: "web" | "desktop"
): Properties {
    console.log(values);
    if (platform === "web") {
        transformGroupsIntoTabs(defaultProperties);
    }
    return defaultProperties;
}
export function getPreview(values: UploadPreviewProps): StructurePreviewProps | null {
    console.log(values);
    return null;
}

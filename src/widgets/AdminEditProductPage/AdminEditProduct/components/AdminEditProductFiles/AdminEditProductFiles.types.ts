import { Dispatch, SetStateAction } from "react";

export interface ISlide {
    id: string;
    src: string;
    file?: File;
}

export interface AdminEditProductFilesProps {
    value: File[];
    onChange: (value: any) => void;
    onChangeRemoved?: Dispatch<SetStateAction<string[]>>;
    data?: string[];
    label?: string;
    error?: string;
}

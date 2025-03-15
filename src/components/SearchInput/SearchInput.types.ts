import { Dispatch, SetStateAction } from "react";

export interface SearchInputProps {
    onChange: Dispatch<SetStateAction<string>>;
}

export interface SearchInputs {
    search?: string | undefined;
}

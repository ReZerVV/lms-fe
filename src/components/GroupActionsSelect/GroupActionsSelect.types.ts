import { ReactNode } from "react";

interface IOption {
    value: string;
    label: string | ReactNode;
}

export interface GroupActionsSelectProps {
    value: string;
    onChange: (value: string) => void;
    options: IOption[];
    onSubmit: () => void;
}

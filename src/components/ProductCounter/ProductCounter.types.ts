export interface ProductCounterProps {
    value: number;
    onChange: (value: number) => void;
    size?: "sm" | "md" | "lg";
}

import { Minus, Plus } from "lucide-react";
import cn from "classnames";

import { Button } from "@/ui";

import { ProductCounterProps } from "./ProductCounter.types";

import styles from "./ProductCounter.module.scss";

const ProductCounter = ({
    value,
    onChange,
    size = "md"
}: ProductCounterProps) => {
    const handleIncrement = () => {
        onChange(value + 1);
    };

    const handleDecrement = () => {
        if (value > 1) {
            onChange(value - 1);
        }
    };

    return (
        <div className={styles.counter}>
            <Button
                className={cn(
                    styles.counter__btn,
                    styles[`counter__btn_${size}`]
                )}
                onClick={handleIncrement}
            >
                <Plus size={21} strokeWidth={1} absoluteStrokeWidth />
            </Button>
            <div
                className={cn(
                    styles.counter__value,
                    styles[`counter__value_${size}`]
                )}
            >
                {value}
            </div>
            <Button
                className={cn(
                    styles.counter__btn,
                    styles[`counter__btn_${size}`]
                )}
                onClick={handleDecrement}
            >
                <Minus size={21} strokeWidth={1} absoluteStrokeWidth />
            </Button>
        </div>
    );
};

export default ProductCounter;

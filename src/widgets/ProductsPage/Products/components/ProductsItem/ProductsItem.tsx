import { Button } from "@/ui";

import { ProductsItemProps } from "./ProductsItem.types";

import styles from "./ProductsItem.module.scss";

const ProductsItem = ({ item }: ProductsItemProps) => {
    return (
        <div className={styles.item}>
            <h3 className={styles.item__title}>{item?.title}</h3>

            <Button>Watch lessons</Button>
        </div>
    );
};

export default ProductsItem;

import { Button } from "@/ui";

import styles from "./ProductsItem.module.scss";

const ProductsItem = () => {
    return (
        <div className={styles.item}>
            <h3 className={styles.item__title}>Test</h3>

            <Button>Watch lessons</Button>
        </div>
    );
};

export default ProductsItem;

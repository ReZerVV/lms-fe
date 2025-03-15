import { HistoryViewPopupProductProps } from "./HistoryViewPopupProduct.types";

import styles from "./HistoryViewPopupProduct.module.scss";

const HistoryViewPopupProduct = ({ product }: HistoryViewPopupProductProps) => {
    return (
        <div className={styles.product}>
            <h3 className={styles.product__title}>{product?.title}</h3>
            <p className={styles.product__price}>
                $ {product?.quantity} X {product?.price}
            </p>
        </div>
    );
};

export default HistoryViewPopupProduct;

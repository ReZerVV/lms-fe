import { AdminOrdersViewPopupProductProps } from "./AdminOrdersViewPopupProduct.types";

import styles from "./AdminOrdersViewPopupProduct.module.scss";

const AdminOrdersViewPopupProduct = ({
    product
}: AdminOrdersViewPopupProductProps) => {
    return (
        <div className={styles.product}>
            <h3 className={styles.product__title}>{product?.title}</h3>
            <p className={styles.product__price}>
                $ {product?.quantity} X {product?.price}
            </p>
        </div>
    );
};

export default AdminOrdersViewPopupProduct;

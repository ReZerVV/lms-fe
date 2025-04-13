import { ProductsItem } from "@/widgets";

import styles from "./Products.module.scss";

const Products = () => {
    return (
        <section className={styles.profile}>
            <div className="container">
                <div className={styles.profile__inner}>
                    <h2 className={styles.profile__title}>My products</h2>
                    <div className={styles.profile__list}>
                        <ProductsItem />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;

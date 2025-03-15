import { CheckoutForm, CheckoutList } from "@/widgets";

import styles from "./Checkout.module.scss";

const Checkout = () => {
    return (
        <section className={styles.checkout}>
            <div className="container">
                <div className={styles.checkout__inner}>
                    <h2 className={styles.checkout__title}>Checkout</h2>
                    <div className={styles.checkout__row}>
                        <div className={styles.checkout__column}>
                            <CheckoutForm />
                        </div>
                        <div className={styles.checkout__column}>
                            <CheckoutList />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Checkout;

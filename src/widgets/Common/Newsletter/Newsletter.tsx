import { Button, Input } from "@/ui";

import styles from "./Newsletter.module.scss";

const Newsletter = () => {
    return (
        <section className={styles.newsletter}>
            <div className="container">
                <div className={styles.newsletter__inner}>
                    <h2 className={styles.newsletter__title}>
                        Subscribe to our newsletter
                    </h2>
                    <p className={styles.newsletter__text}>
                        Get the latest news and updates from us
                    </p>
                    <form className={styles.newsletter__form}>
                        <Input placeholder="Email" />
                        <Button>Subscribe</Button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;

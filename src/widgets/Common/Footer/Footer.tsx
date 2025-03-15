import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer__inner}>
                    <p className={styles.footer__copywriting}>
                        © 2025 All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

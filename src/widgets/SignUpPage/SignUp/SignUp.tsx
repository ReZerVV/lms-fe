import { SignUpForm } from "@/widgets";

import styles from "./SignUp.module.scss";

const SignUp = () => {
    return (
        <section className={styles.register}>
            <div className="container">
                <div className={styles.register__inner}>
                    <div className={styles.register__box}>
                        <h2 className={styles.register__title}>
                            Welcome! <span>Sign up to continue</span>
                        </h2>
                        <SignUpForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;

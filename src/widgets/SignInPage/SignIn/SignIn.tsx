import { SignInForm } from "@/widgets";

import styles from "./SignIn.module.scss";

const SignIn = () => {
    return (
        <section className={styles.login}>
            <div className="container">
                <div className={styles.login__inner}>
                    <div className={styles.login__box}>
                        <h2 className={styles.login__title}>
                            Welcome! <span>Sign in to continue</span>
                        </h2>
                        <SignInForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignIn;

import {
    ProfileAddressForm,
    ProfileForm,
    ProfilePasswordForm
} from "@/widgets";

import styles from "./Profile.module.scss";

const Profile = () => {
    return (
        <section className={styles.profile}>
            <div className="container">
                <div className={styles.profile__inner}>
                    <h2 className={styles.profile__title}>Profile</h2>
                    <div className={styles.profile__column}>
                        <ProfileForm />
                    </div>
                    <div className={styles.profile__column}>
                        <ProfileAddressForm />
                    </div>
                    <div className={styles.profile__column}>
                        <ProfilePasswordForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;

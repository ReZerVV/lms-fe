import { ProfileProductLessons } from "@/widgets";
import { VideoPlayer } from "@/components";

import styles from "./ProfileProduct.module.scss";

const ProfileProduct = () => {
    return (
        <section className={styles.lesson}>
            <div className="container">
                <div className={styles.lesson__inner}>
                    <div className={styles.lesson__row}>
                        <div className={styles.lesson__column}>
                            <VideoPlayer src="/img/video.webm" />
                            <p className={styles.lesson__text}>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Corrupti consequatur sed,
                                minus incidunt, ab odit excepturi nesciunt
                                suscipit aliquid et alias possimus voluptatibus!
                                Minus, cum quasi est quidem saepe officia.s
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Corrupti consequatur sed,
                                minus incidunt, ab odit excepturi nesciunt
                                suscipit aliquid et alias possimus voluptatibus!
                                Minus, cum quasi est quidem saepe officia.s
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Corrupti consequatur sed,
                                minus incidunt, ab odit excepturi nesciunt
                                suscipit aliquid et alias possimus voluptatibus!
                                Minus, cum quasi est quidem saepe officia.s
                            </p>
                        </div>
                        <div className={styles.lesson__column}>
                            <ProfileProductLessons />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileProduct;

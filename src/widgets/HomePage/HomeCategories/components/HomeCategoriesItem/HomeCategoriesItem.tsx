import Image from "next/image";

import { STORAGE_URL } from "@/shared";
import { HomeCategoriesItemProps } from "./HomeCategoriesItem.types";

import styles from "./HomeCategoriesItem.module.scss";

const HomeCategoriesItem = ({ data }: HomeCategoriesItemProps) => {
    return (
        <div className={styles.item}>
            <div className={styles.item__img}>
                <Image src={`${STORAGE_URL}${data?.iconUrl}`} alt="img" fill />
            </div>
            <h3 className={styles.item__title}>{data?.title}</h3>
            <p className={styles.item__description}>{data?.description}</p>
        </div>
    );
};

export default HomeCategoriesItem;

import { LoadingIcon } from "@/shared";

import styles from "./Loader.module.scss";

const Loader = () => {
    return (
        <div className={styles.loader}>
            <LoadingIcon />
        </div>
    );
};

export default Loader;

import { Popup } from "@/ui";

import { AdminOrdersCreatePopupProps } from "./AdminOrdersCreatePopup.types";

import styles from "./AdminOrdersCreatePopup.module.scss";

const AdminOrdersCreatePopup = ({
    handleClose
}: AdminOrdersCreatePopupProps) => {
    return (
        <Popup onClose={handleClose}>
            <div className={styles.popup}>
                <h3 className={styles.popup__title}>Create order</h3>
                <form>
                    <div className={styles.popup__row}></div>
                </form>
            </div>
        </Popup>
    );
};

export default AdminOrdersCreatePopup;

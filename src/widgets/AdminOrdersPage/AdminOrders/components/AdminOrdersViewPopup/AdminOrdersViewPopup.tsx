import { AdminOrdersViewPopupProduct } from "@/widgets";
import { Input, Popup } from "@/ui";

import { AdminOrdersViewPopupProps } from "./AdminOrdersViewPopup.types";

import styles from "./AdminOrdersViewPopup.module.scss";

const AdminOrdersViewPopup = ({
    item,
    handleClose
}: AdminOrdersViewPopupProps) => {
    return (
        <Popup classNameInner={styles.popup__wrapper} onClose={handleClose}>
            <div className={styles.popup}>
                <h3 className={styles.popup__title}>Order</h3>
                <div className={styles.popup__form}>
                    <div className={styles.popup__row}>
                        {item?.firstName ? (
                            <Input
                                label="First name"
                                value={item?.firstName}
                                isReadOnly
                            />
                        ) : null}
                        {item?.lastName ? (
                            <Input
                                label="Last name"
                                value={item?.lastName}
                                isReadOnly
                            />
                        ) : null}
                        {item?.email ? (
                            <Input
                                label="Email"
                                value={item?.email}
                                isReadOnly
                            />
                        ) : null}
                        {item?.phoneNumber ? (
                            <Input
                                label="Phone number"
                                value={item?.phoneNumber}
                                isReadOnly
                            />
                        ) : null}
                    </div>
                    <div className={styles.popup__row}>
                        {item?.country ? (
                            <Input
                                label="Country"
                                value={item?.country}
                                isReadOnly
                            />
                        ) : null}
                        {item?.state ? (
                            <Input
                                label="State"
                                value={item?.state}
                                isReadOnly
                            />
                        ) : null}
                        {item?.city ? (
                            <Input label="City" value={item?.city} isReadOnly />
                        ) : null}
                    </div>
                    <div className={styles.popup__row}>
                        {item?.street ? (
                            <Input
                                label="Street"
                                value={item?.street}
                                isReadOnly
                            />
                        ) : null}
                        {item?.floor ? (
                            <div className={styles.popup__small}>
                                <Input
                                    label="Floor"
                                    value={item?.floor}
                                    isReadOnly
                                />
                            </div>
                        ) : null}
                        {item?.zip ? (
                            <div className={styles.popup__small}>
                                <Input
                                    label="Zip"
                                    value={item?.zip}
                                    isReadOnly
                                />
                            </div>
                        ) : null}
                        {item?.house ? (
                            <div className={styles.popup__small}>
                                <Input
                                    label="House"
                                    value={item?.house}
                                    isReadOnly
                                />
                            </div>
                        ) : null}
                        {item?.flat ? (
                            <div className={styles.popup__small}>
                                <Input
                                    label="Flat"
                                    value={item?.flat}
                                    isReadOnly
                                />
                            </div>
                        ) : null}
                    </div>
                    <div className={styles.popup__row}>
                        <p className={styles.popup__text}>
                            Total: $ {item?.totalPrice}
                        </p>
                    </div>
                    <div className={styles.popup__items}>
                        {item?.items.map((product, index) => (
                            <AdminOrdersViewPopupProduct
                                key={index}
                                product={product}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Popup>
    );
};

export default AdminOrdersViewPopup;

import { HistoryViewPopupProduct } from "@/widgets";
import { Input, Popup } from "@/ui";

import { HistoryViewPopupProps } from "./HistoryViewPopup.types";

import styles from "./HistoryViewPopup.module.scss";

const HistoryViewPopup = ({ item, onClose }: HistoryViewPopupProps) => {
    return (
        <Popup classNameInner={styles.checkout__wrapper} onClose={onClose}>
            <div className={styles.checkout}>
                <h3 className={styles.checkout__title}>Your checkout</h3>
                <div className={styles.checkout__form}>
                    <div className={styles.checkout__row}>
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
                    <div className={styles.checkout__row}>
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
                    <div className={styles.checkout__row}>
                        {item?.street ? (
                            <Input
                                label="Street"
                                value={item?.street}
                                isReadOnly
                            />
                        ) : null}
                        {item?.floor ? (
                            <div className={styles.checkout__small}>
                                <Input
                                    label="Floor"
                                    value={item?.floor}
                                    isReadOnly
                                />
                            </div>
                        ) : null}
                        {item?.zip ? (
                            <div className={styles.checkout__small}>
                                <Input
                                    label="Zip"
                                    value={item?.zip}
                                    isReadOnly
                                />
                            </div>
                        ) : null}
                        {item?.house ? (
                            <div className={styles.checkout__small}>
                                <Input
                                    label="House"
                                    value={item?.house}
                                    isReadOnly
                                />
                            </div>
                        ) : null}
                        {item?.flat ? (
                            <div className={styles.checkout__small}>
                                <Input
                                    label="Flat"
                                    value={item?.flat}
                                    isReadOnly
                                />
                            </div>
                        ) : null}
                    </div>
                    <div className={styles.checkout__row}>
                        <p className={styles.checkout__text}>
                            Total: $ {item?.totalPrice}
                        </p>
                    </div>
                    <div className={styles.checkout__items}>
                        {item?.items.map((product, index) => (
                            <HistoryViewPopupProduct
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

export default HistoryViewPopup;

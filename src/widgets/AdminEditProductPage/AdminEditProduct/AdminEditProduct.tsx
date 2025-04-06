"use client";

import { useState } from "react";
import cn from "classnames";

import { AdminEditProductForm, AdminEditProductUploadVideos } from "@/widgets";
import { Button } from "@/ui";

import styles from "./AdminEditProduct.module.scss";

const AdminEditProduct = () => {
    const [activeTab, setActiveTab] = useState<string>("general");

    const handleChangeTab = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <section className={styles.admin}>
            <div className={cn(styles.admin__container, "container")}>
                <div className={styles.admin__inner}>
                    <h2 className={styles.admin__title}>Edit product</h2>
                    <div className={styles.admin__tabs}>
                        <Button onClick={() => handleChangeTab("general")}>
                            General
                        </Button>
                        <Button onClick={() => handleChangeTab("upload")}>
                            Upload videos
                        </Button>
                    </div>
                    <div className={styles.admin__tab}>
                        {activeTab === "general" ? (
                            <AdminEditProductForm />
                        ) : null}
                        {activeTab === "upload" ? (
                            <AdminEditProductUploadVideos />
                        ) : null}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminEditProduct;

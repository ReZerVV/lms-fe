"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { ListPlus } from "lucide-react";

import { AdminProductsTable } from "@/widgets";
import { GroupActionsSelect, SearchInput } from "@/components";
import { Button, Pagination } from "@/ui";

import { useDeleteProducts, useGetProducts, useToggleProducts } from "@/apis";
import {
    ADMIN_CREATE_PRODUCTS_ROUTE,
    paginationLimitsList,
    productsGroupActionsList,
    SUCCESS_MESSAGE
} from "@/shared";

import styles from "./AdminProducts.module.scss";

const AdminProducts = () => {
    const [activePage, setActivePage] = useState<number>(1);
    const [perPage, setPerPage] = useState<number>(paginationLimitsList[0]);
    const [search, setSearch] = useState<string>("");
    const [groupAction, setGroupAction] = useState<string>(
        productsGroupActionsList[0]?.value
    );
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const router = useRouter();

    const queryClient = useQueryClient();

    const { data: productsData, isLoading: productsIsLoading } = useGetProducts(
        activePage,
        perPage,
        search
    );

    const { mutate: deleteProducts } = useDeleteProducts({
        onSuccess: () => {
            toast.success("Product deleted successfully");
            queryClient.invalidateQueries({ queryKey: ["products"] });
        }
    });
    const { mutate: toggleProducts } = useToggleProducts({
        onSuccess: () => {
            toast.success(SUCCESS_MESSAGE);
            queryClient.invalidateQueries({ queryKey: ["products"] });
        }
    });

    const handleSelectAll = (isChecked: boolean) => {
        if (productsData) {
            if (isChecked) {
                setSelectedItems(productsData?.data.map((item) => item.id));
            } else {
                setSelectedItems([]);
            }
        }
    };

    const handleSelectItem = (isChecked: boolean, id: string) => {
        setSelectedItems((prev) =>
            isChecked ? [...prev, id] : prev.filter((item) => item !== id)
        );
    };

    const handleApplyGroupAction = () => {
        if (groupAction === "delete") {
            deleteProducts(selectedItems);
        } else if (groupAction === "active") {
            toggleProducts({ isActive: true, ids: selectedItems });
        } else if (groupAction === "disable") {
            toggleProducts({ isActive: false, ids: selectedItems });
        }
    };

    const goCreate = () => {
        router.push(ADMIN_CREATE_PRODUCTS_ROUTE);
    };

    return (
        <section className={styles.admin}>
            <div className="container">
                <div className={styles.admin__inner}>
                    <h2 className={styles.admin__title}>Products</h2>
                    <div className={styles.admin__row}>
                        <div className={styles.admin__search}>
                            <SearchInput onChange={setSearch} />
                        </div>
                        <div className={styles.admin__actions}>
                            <div className={styles.admin__actions_select}>
                                <GroupActionsSelect
                                    value={groupAction}
                                    onChange={setGroupAction}
                                    options={productsGroupActionsList}
                                    onSubmit={handleApplyGroupAction}
                                />
                            </div>
                            <Button
                                leftIcon={
                                    <ListPlus
                                        size={20}
                                        strokeWidth={1.5}
                                        absoluteStrokeWidth
                                    />
                                }
                                onClick={goCreate}
                            >
                                Create
                            </Button>
                        </div>
                    </div>
                    {!productsIsLoading ? (
                        <>
                            <div className={styles.admin__table}>
                                <AdminProductsTable
                                    data={productsData?.data || []}
                                    selectedItems={selectedItems}
                                    onSelect={handleSelectItem}
                                    onSelectAll={handleSelectAll}
                                    onDelete={deleteProducts}
                                    onToggle={toggleProducts}
                                />
                            </div>
                            <div className={styles.admin__pagination}>
                                <Pagination
                                    currentPage={activePage}
                                    onChange={setActivePage}
                                    perPage={perPage}
                                    onChangePerPage={setPerPage}
                                    limitsList={paginationLimitsList}
                                    totalItems={productsData?.totalItems || 0}
                                />
                            </div>
                        </>
                    ) : null}
                </div>
            </div>
        </section>
    );
};

export default AdminProducts;

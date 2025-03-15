"use client";

import { useState } from "react";
import { ListPlus } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { AdminCategoriesCreatePopup, AdminCategoriesTable } from "@/widgets";
import { GroupActionsSelect, SearchInput } from "@/components";
import { Button, Pagination } from "@/ui";

import {
    useDeleteCategories,
    useGetCategories,
    useToggleCategories
} from "@/apis";
import {
    paginationLimitsList,
    categoriesGroupActionsList,
    SUCCESS_MESSAGE
} from "@/shared";

import styles from "./AdminCategories.module.scss";

const AdminCategories = () => {
    const [isCreatePopupOpen, setIsCreatePopupOpen] = useState<boolean>(false);
    const [activePage, setActivePage] = useState<number>(1);
    const [perPage, setPerPage] = useState<number>(paginationLimitsList[0]);
    const [search, setSearch] = useState<string>("");
    const [groupAction, setGroupAction] = useState<string>(
        categoriesGroupActionsList[0].value
    );
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const queryClient = useQueryClient();

    const { data: categoriesData, isLoading: categoriesIsLoading } =
        useGetCategories(activePage, perPage, search);

    const { mutate: deleteCategories } = useDeleteCategories({
        onSuccess: () => {
            toast.success("Category deleted successfully");
            queryClient.invalidateQueries({ queryKey: ["categories"] });
        }
    });
    const { mutate: toggleCategories } = useToggleCategories({
        onSuccess: () => {
            toast.success(SUCCESS_MESSAGE);
            queryClient.invalidateQueries({ queryKey: ["categories"] });
        }
    });

    const handleSelectAll = (isChecked: boolean) => {
        if (categoriesData) {
            if (isChecked) {
                setSelectedItems(categoriesData?.data.map((item) => item.id));
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
            deleteCategories(selectedItems);
        } else if (groupAction === "active") {
            toggleCategories({ ids: selectedItems, isActive: true });
        } else if (groupAction === "disable") {
            toggleCategories({ ids: selectedItems, isActive: false });
        }
    };

    const handleCreatePopupOpen = () => {
        setIsCreatePopupOpen(true);
    };

    const handleCreatePopupClose = () => {
        setIsCreatePopupOpen(false);
    };

    return (
        <>
            <section className={styles.admin}>
                <div className="container">
                    <div className={styles.admin__inner}>
                        <h2 className={styles.admin__title}>Categories</h2>
                        <div className={styles.admin__row}>
                            <div className={styles.admin__search}>
                                <SearchInput onChange={setSearch} />
                            </div>
                            <div className={styles.admin__actions}>
                                <div className={styles.admin__actions_select}>
                                    <GroupActionsSelect
                                        value={groupAction}
                                        onChange={setGroupAction}
                                        options={categoriesGroupActionsList}
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
                                    onClick={handleCreatePopupOpen}
                                >
                                    Create
                                </Button>
                            </div>
                        </div>
                        {!categoriesIsLoading ? (
                            <>
                                <div className={styles.admin__table}>
                                    <AdminCategoriesTable
                                        data={categoriesData?.data || []}
                                        selectedItems={selectedItems}
                                        onSelect={handleSelectItem}
                                        onSelectAll={handleSelectAll}
                                        onDelete={deleteCategories}
                                        onToggle={toggleCategories}
                                    />
                                </div>
                                <div className={styles.admin__pagination}>
                                    <Pagination
                                        currentPage={activePage}
                                        onChange={setActivePage}
                                        perPage={perPage}
                                        onChangePerPage={setPerPage}
                                        limitsList={paginationLimitsList}
                                        totalItems={
                                            categoriesData?.totalItems || 0
                                        }
                                    />
                                </div>
                            </>
                        ) : null}
                    </div>
                </div>
            </section>
            {isCreatePopupOpen ? (
                <AdminCategoriesCreatePopup onClose={handleCreatePopupClose} />
            ) : null}
        </>
    );
};

export default AdminCategories;

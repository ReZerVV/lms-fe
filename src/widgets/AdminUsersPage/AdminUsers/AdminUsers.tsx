"use client";

import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { UserRoundPlus } from "lucide-react";

import { AdminUsersCreatePopup, AdminUsersTable } from "@/widgets";
import { GroupActionsSelect, SearchInput } from "@/components";
import { Button, Pagination } from "@/ui";

import { useDeleteUsers, useGetUsers } from "@/apis";
import { paginationLimitsList, usersGroupActionsList } from "@/shared";

import styles from "./AdminUsers.module.scss";

const AdminUsers = () => {
    const [activePage, setActivePage] = useState<number>(1);
    const [perPage, setPerPage] = useState<number>(paginationLimitsList[0]);
    const [search, setSearch] = useState<string>("");
    const [groupAction, setGroupAction] = useState<string>(
        usersGroupActionsList[0].value
    );
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [isCreatePopupOpen, setIsCreatePopupOpen] = useState<boolean>(false);

    const queryClient = useQueryClient();

    const { data: usersData, isLoading: usersIsLoading } = useGetUsers(
        activePage,
        perPage,
        search
    );

    const { mutate: deleteUsers } = useDeleteUsers({
        onSuccess: () => {
            toast.success("Users deleted successfully");
            queryClient.invalidateQueries({ queryKey: ["users"] });
        }
    });

    const handleSelectAll = (isChecked: boolean) => {
        if (usersData) {
            if (isChecked) {
                setSelectedItems(usersData?.data.map((item) => item.id));
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
            deleteUsers(selectedItems);
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
                        <h2 className={styles.admin__title}>Users</h2>
                        <div className={styles.admin__row}>
                            <div className={styles.admin__search}>
                                <SearchInput onChange={setSearch} />
                            </div>
                            <div className={styles.admin__actions}>
                                <div className={styles.admin__actions_select}>
                                    <GroupActionsSelect
                                        value={groupAction}
                                        onChange={setGroupAction}
                                        options={usersGroupActionsList}
                                        onSubmit={handleApplyGroupAction}
                                    />
                                </div>
                                <Button
                                    leftIcon={
                                        <UserRoundPlus
                                            size={20}
                                            strokeWidth={1.5}
                                        />
                                    }
                                    onClick={handleCreatePopupOpen}
                                >
                                    Create
                                </Button>
                            </div>
                        </div>
                        {!usersIsLoading ? (
                            <>
                                <div className={styles.admin__table}>
                                    <AdminUsersTable
                                        data={usersData?.data || []}
                                        selectedItems={selectedItems}
                                        onSelect={handleSelectItem}
                                        onSelectAll={handleSelectAll}
                                        onDelete={deleteUsers}
                                    />
                                </div>
                                <div className={styles.admin__pagination}>
                                    <Pagination
                                        currentPage={activePage}
                                        onChange={setActivePage}
                                        perPage={perPage}
                                        onChangePerPage={setPerPage}
                                        limitsList={paginationLimitsList}
                                        totalItems={usersData?.totalItems || 0}
                                    />
                                </div>
                            </>
                        ) : null}
                    </div>
                </div>
            </section>
            {isCreatePopupOpen ? (
                <AdminUsersCreatePopup onClose={handleCreatePopupClose} />
            ) : null}
        </>
    );
};

export default AdminUsers;

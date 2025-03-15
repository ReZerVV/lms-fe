import { Button, Select } from "@/ui";

import { GroupActionsSelectProps } from "./GroupActionsSelect.types";

import styles from "./GroupActionsSelect.module.scss";

const GroupActionsSelect = ({
    value,
    onChange,
    options,
    onSubmit
}: GroupActionsSelectProps) => {
    return (
        <div className={styles.actions}>
            <Select
                className={styles.actions__select}
                value={value}
                onChange={onChange}
                options={options}
            />
            <Button className={styles.actions__btn} onClick={onSubmit}>
                Ок
            </Button>
        </div>
    );
};

export default GroupActionsSelect;

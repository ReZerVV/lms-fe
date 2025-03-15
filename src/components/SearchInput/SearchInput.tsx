"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Input } from "@/ui";

import { SearchInputSchema } from "@/shared";
import { SearchInputProps, SearchInputs } from "./SearchInput.types";

import styles from "./SearchInput.module.scss";

const SearchInput = ({ onChange, ...props }: SearchInputProps) => {
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<SearchInputs>({
        resolver: yupResolver(SearchInputSchema)
    });

    const onSubmit = (data: SearchInputs) => {
        onChange(data.search ?? "");
    };

    return (
        <form className={styles.search} onSubmit={handleSubmit(onSubmit)}>
            <Input
                placeholder="Search"
                error={errors.search?.message}
                {...register("search")}
                {...props}
            />
            <Button type="submit">Ок</Button>
        </form>
    );
};

export default SearchInput;

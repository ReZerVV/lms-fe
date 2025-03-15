"use client";

import { forwardRef, Ref } from "react";
import DropzoneBox, { DropzoneRef } from "react-dropzone";
import { toast } from "react-toastify";

import { DropzoneProps } from "./Dropzone.types";

import styles from "./Dropzone.module.scss";

const Dropzone = forwardRef(
    (
        {
            children,
            value,
            onChange,
            accept,
            maxFiles = 5,
            multiple = false,
            ...props
        }: DropzoneProps,
        ref: Ref<DropzoneRef>
    ) => {
        const handleChanges = (acceptedFiles: File[]) => {
            if (!multiple) {
                onChange([...acceptedFiles]);
            } else {
                if (value.length + acceptedFiles.length <= maxFiles) {
                    onChange([...value, ...acceptedFiles]);
                } else {
                    toast.error("You can't upload more files");
                }
            }
        };

        return (
            <DropzoneBox
                ref={ref}
                onDrop={handleChanges}
                accept={accept}
                multiple={multiple}
                {...props}
            >
                {({ getRootProps, getInputProps }) => (
                    <div className={styles.dropzone}>
                        <div
                            className={styles.dropzone__inner}
                            {...getRootProps()}
                        >
                            <input {...getInputProps()} />
                            {children}
                        </div>
                    </div>
                )}
            </DropzoneBox>
        );
    }
);

export default Dropzone;

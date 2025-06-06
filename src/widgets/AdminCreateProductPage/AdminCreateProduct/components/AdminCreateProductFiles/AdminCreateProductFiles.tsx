"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Upload } from "lucide-react";

import { ImageSlider } from "@/components";
import { Dropzone, FormField } from "@/ui";

import {
    AdminCreateProductFilesProps,
    ISlide
} from "./AdminCreateProductFiles.types";

import styles from "./AdminCreateProductFiles.module.scss";

const AdminCreateProductFiles = ({
    value,
    onChange,
    onChangeRemoved,
    data,
    label,
    error
}: AdminCreateProductFilesProps) => {
    const [slides, setSlides] = useState<ISlide[]>(
        (data || []).map((slide) => ({ id: uuidv4(), src: slide }))
    );

    const handleAddFiles = (files: File[]) => {
        const newSlides = files
            .filter((file) => !slides.some((slide) => slide?.file === file))
            .map((file) => ({
                id: uuidv4(),
                src: URL.createObjectURL(file),
                file: file
            }));

        setSlides([...slides, ...newSlides]);
        onChange(files);
    };

    const handleRemoveSlide = (slide: ISlide) => {
        setSlides((prev) => prev.filter((s) => s.id !== slide.id));

        if (slide?.file) {
            const updatedValue = value.filter((f) => f !== slide.file);
            onChange(updatedValue);
        }

        if (onChangeRemoved && data?.includes(slide?.src)) {
            onChangeRemoved((prev: string[]) => [...prev, slide.src]);
        }
    };

    return (
        <div className={styles.files}>
            <FormField label={label} error={error}>
                <Dropzone
                    value={value}
                    onChange={handleAddFiles}
                    maxFiles={10}
                    multiple
                    accept={{
                        "image/png": [".png"],
                        "image/jpeg": [".jpeg", ".jpg"]
                    }}
                >
                    <div className={styles.files__dropzone}>
                        <Upload size={24} strokeWidth={1.5} />
                    </div>
                </Dropzone>
            </FormField>
            {slides ? (
                <div className={styles.files__slider}>
                    <ImageSlider slides={slides} onDelete={handleRemoveSlide} />
                </div>
            ) : null}
        </div>
    );
};

export default AdminCreateProductFiles;

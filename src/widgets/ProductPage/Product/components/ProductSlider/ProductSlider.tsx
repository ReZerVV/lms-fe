"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import cn from "classnames";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/ui";

import { STORAGE_URL } from "@/shared";
import { ProductSliderProps } from "./ProductSlider.types";

import "swiper/css";
import "swiper/css/navigation";
import styles from "./ProductSlider.module.scss";

const ProductSlider = ({ slides, ...props }: ProductSliderProps) => {
    const [swiperRef, setSwiperRef] = useState<SwiperClass>();

    const handlePrevious = useCallback(() => {
        swiperRef?.slidePrev();
    }, [swiperRef]);

    const handleNext = useCallback(() => {
        swiperRef?.slideNext();
    }, [swiperRef]);

    return (
        <Swiper
            className={styles.slider__swiper}
            onSwiper={setSwiperRef}
            slidesPerView={1}
            spaceBetween={30}
            modules={[Navigation]}
            {...props}
        >
            {slides?.map((slide: string, index: number) => (
                <SwiperSlide key={index} className={styles.slider__slide}>
                    <div className={styles.slider__slide_box}>
                        <Image
                            src={`${STORAGE_URL}${slide}`}
                            alt="image"
                            fill
                        />
                    </div>
                </SwiperSlide>
            ))}
            <Button
                className={cn(styles.slider__btn, styles.slider__btn_prev)}
                onClick={handlePrevious}
            >
                <ChevronLeft strokeWidth={1.5} />
            </Button>
            <Button
                className={cn(styles.slider__btn, styles.slider__btn_next)}
                onClick={handleNext}
            >
                <ChevronRight strokeWidth={1.5} />
            </Button>
        </Swiper>
    );
};

export default ProductSlider;

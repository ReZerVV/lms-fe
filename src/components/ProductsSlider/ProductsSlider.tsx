"use client";

import { useCallback, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import cn from "classnames";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { ProductCard } from "@/components";
import { Button } from "@/ui";

import { IProduct } from "@/shared";
import { ProductsSliderProps } from "./ProductsSlider.types";

import "swiper/css";
import "swiper/css/navigation";
import styles from "./ProductsSlider.module.scss";

const ProductsSlider = ({ products, ...props }: ProductsSliderProps) => {
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
            slidesPerView={4}
            slidesPerGroup={1}
            spaceBetween={30}
            pagination={{
                clickable: true
            }}
            modules={[Navigation]}
            {...props}
        >
            {products?.map((slide: IProduct) => (
                <SwiperSlide key={slide.id} className={styles.slider__slide}>
                    <div className={styles.slider__slide_box}>
                        <ProductCard data={slide} />
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

export default ProductsSlider;

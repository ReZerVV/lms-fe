"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import cn from "classnames";
import { ChevronLeft, ChevronRight, Trash } from "lucide-react";

import { Button } from "@/ui";

import { ImageSliderProps, ISlide } from "./ImageSlider.types";

import "swiper/css";
import "swiper/css/navigation";
import styles from "./ImageSlider.module.scss";

const ImageSlider = ({ slides, onDelete, ...props }: ImageSliderProps) => {
    const nextRef = useRef<HTMLButtonElement | null>(null);
    const prevRef = useRef<HTMLButtonElement | null>(null);

    return (
        <Swiper
            className={styles.slider__swiper}
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
                clickable: true
            }}
            navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current
            }}
            modules={[Navigation]}
            {...props}
        >
            {slides?.map((slide: ISlide) => (
                <SwiperSlide key={slide.id} className={styles.slider__slide}>
                    <div className={styles.slider__slide_box}>
                        <Image src={slide.src} alt="image" fill />
                        <button
                            type="button"
                            className={styles.slider__slide_delete}
                            onClick={() => onDelete(slide)}
                        >
                            <Trash size={20} strokeWidth={1.5} />
                        </button>
                    </div>
                </SwiperSlide>
            ))}
            <Button
                ref={prevRef}
                className={cn(styles.slider__btn, styles.slider__btn_prev)}
            >
                <ChevronLeft strokeWidth={1.5} />
            </Button>
            <Button
                ref={nextRef}
                className={cn(styles.slider__btn, styles.slider__btn_next)}
            >
                <ChevronRight strokeWidth={1.5} />
            </Button>
        </Swiper>
    );
};

export default ImageSlider;

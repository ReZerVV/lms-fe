import { SwiperOptions } from "swiper/types";

export interface ISlide {
    id: string;
    src: string;
    file?: File;
}

export interface ImageSliderProps extends SwiperOptions {
    slides: ISlide[];
    onDelete: (slide: ISlide) => void;
}

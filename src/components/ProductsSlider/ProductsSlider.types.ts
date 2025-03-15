import { SwiperOptions } from "swiper/types";

import { IProduct } from "@/shared";

export interface ProductsSliderProps extends SwiperOptions {
    products: IProduct[];
}

import { ICart, IProduct } from "@/shared";

export const totalPriceCounter = (data: any, cart: ICart[]) => {
    let total = 0;

    data?.data.forEach((item: IProduct) => {
        const cartItem = cart.find((cartItem) => cartItem.id === item.id);

        if (cartItem) {
            total += item?.discountPrice
                ? item?.discountPrice * cartItem?.count
                : item.price * cartItem?.count;
        }
    });
    return total;
};

import {
    ChartBarStacked,
    ChartNoAxesCombined,
    Package,
    Tags,
    UserPen,
    Users,
    History
} from "lucide-react";

export const HOME_ROUTE = "/";
export const CATALOG_ROUTE = "/catalog";
export const PRODUCT_ROUTE = "/product";
export const PROFILE_ROUTE = "/profile";
export const HISTORY_ROUTE = "/profile/history";
export const CART_ROUTE = "/cart";
export const FAVORITES_ROUTE = "/favorites";
export const CHECKOUT_ROUTE = "/checkout";
export const NOT_FOUND_ROUTE = "/404";

export const SIGN_IN_ROUTE = "/auth/sign-in";
export const SIGN_UP_ROUTE = "/auth/sign-up";

export const ADMIN_ROUTE = "/admin";
export const ADMIN_DASHBOARD_ROUTE = "/admin/dashboard";
export const ADMIN_PRODUCTS_ROUTE = "/admin/products";
export const ADMIN_CREATE_PRODUCTS_ROUTE = "/admin/products/create";
export const ADMIN_EDIT_PRODUCTS_ROUTE = "/admin/products/edit";
export const ADMIN_CATEGORIES_ROUTE = "/admin/categories";
export const ADMIN_USERS_ROUTE = "/admin/users";
export const ADMIN_ORDERS_ROUTE = "/admin/orders";

export const menuList = [
    {
        href: HOME_ROUTE,
        title: "Home"
    },
    {
        href: CATALOG_ROUTE,
        title: "Catalog"
    }
];

export const profileMenuList = [
    {
        href: PROFILE_ROUTE,
        title: "Profile",
        icon: <UserPen size={20} strokeWidth={1.5} />
    },
    {
        href: HISTORY_ROUTE,
        title: "History",
        icon: <History size={20} strokeWidth={1.5} />
    }
];

export const adminMenuList = [
    {
        href: ADMIN_DASHBOARD_ROUTE,
        title: "Analytics",
        icon: <ChartNoAxesCombined size={20} strokeWidth={1.5} />
    },
    {
        href: ADMIN_PRODUCTS_ROUTE,
        title: "Products",
        icon: <Package size={20} strokeWidth={1.5} />
    },
    {
        href: ADMIN_CATEGORIES_ROUTE,
        title: "Categories",
        icon: <ChartBarStacked size={20} strokeWidth={1.5} />
    },
    {
        href: ADMIN_USERS_ROUTE,
        title: "Users",
        icon: <Users size={20} strokeWidth={1.5} />
    },
    {
        href: ADMIN_ORDERS_ROUTE,
        title: "Orders",
        icon: <Tags size={20} strokeWidth={1.5} />
    }
];

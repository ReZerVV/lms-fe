"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Heart, ShoppingBag, UserRound } from "lucide-react";

import { Button } from "@/ui";

import { useAuthStore } from "@/store";
import {
    CART_ROUTE,
    FAVORITES_ROUTE,
    menuList,
    PROFILE_ROUTE,
    SIGN_IN_ROUTE,
    SIGN_UP_ROUTE
} from "@/shared";

import styles from "./Header.module.scss";

const Header = () => {
    const user = useAuthStore((state) => state.user);
    const router = useRouter();

    const goProfile = () => [router.push(PROFILE_ROUTE)];

    const goSignIn = () => {
        router.push(SIGN_IN_ROUTE);
    };

    const goSignUp = () => {
        router.push(SIGN_UP_ROUTE);
    };

    const goCart = () => {
        router.push(CART_ROUTE);
    };

    const goFavorites = () => {
        router.push(FAVORITES_ROUTE);
    };

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header__inner}>
                    <Link href="/" className={styles.header__logo}>
                        Clothes Shop
                    </Link>
                    <nav className={styles.header__menu}>
                        <ul className={styles.header__list}>
                            {menuList && menuList.length > 0
                                ? menuList.map((item, index) => (
                                      <li
                                          key={index}
                                          className={styles.header__list_item}
                                      >
                                          <Link
                                              href={item.href}
                                              className={
                                                  styles.header__item_link
                                              }
                                          >
                                              {item.title}
                                          </Link>
                                      </li>
                                  ))
                                : null}
                        </ul>
                    </nav>
                    <div className={styles.header__row}>
                        <button
                            className={styles.header__btn}
                            onClick={goFavorites}
                        >
                            <Heart size={16} />
                        </button>
                        <button className={styles.header__btn} onClick={goCart}>
                            <ShoppingBag size={16} />
                        </button>
                        {user ? (
                            <>
                                <button
                                    className={styles.header__btn}
                                    onClick={goProfile}
                                >
                                    <UserRound size={16} />
                                </button>
                            </>
                        ) : (
                            <>
                                <Button size="sm" onClick={goSignIn}>
                                    Sign In
                                </Button>
                                <Button size="sm" onClick={goSignUp}>
                                    Sign Up
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

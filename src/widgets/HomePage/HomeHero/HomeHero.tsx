"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { Button } from "@/ui";

import { CATALOG_ROUTE } from "@/shared";

import styles from "./HomeHero.module.scss";

const HomeHero = () => {
    const router = useRouter();

    const goCatalog = () => {
        router.push(CATALOG_ROUTE);
    };

    return (
        <section className={styles.home}>
            <div className="container">
                <div className={styles.home__inner}>
                    <h2 className={styles.home__title}>Discover Your Style</h2>
                    <p className={styles.home__text}>
                        Shop the latest trends and timeless classics. Find
                        everything you need to elevate your wardrobe today!
                    </p>
                    <Button
                        className={styles.home__btn}
                        variant="secondary"
                        onClick={goCatalog}
                    >
                        Shop now
                    </Button>
                    <div className={styles.home__darken} />
                    <div className={styles.home__bg}>
                        <Image src="/img/background-hero.jpg" alt="bg" fill />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;

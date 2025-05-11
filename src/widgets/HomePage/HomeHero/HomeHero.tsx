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
                    <h2 className={styles.home__title}>
                        Let's <br /> E-learning <br /> at your home
                    </h2>
                    <p className={styles.home__text}>
                        Join thousands of learners worldwide. Master new skills,
                        advance your career, and achieve your dreams.
                    </p>
                    <Button
                        className={styles.home__btn}
                        variant="secondary"
                        onClick={goCatalog}
                    >
                        Start Learning Today
                    </Button>
                    <div className={styles.home__darken} />
                    <div className={styles.home__bg}>
                        <Image src="/img/background-hero.png" alt="bg" fill />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;

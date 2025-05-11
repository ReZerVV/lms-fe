"use client";

import { FC } from "react";

import Image from "next/image";
import { Button } from "@/ui";

import styles from "./HomeRoadmaps.module.scss";
import Link from "next/link";

const HomeRoadmaps: FC = () => {
    return (
        <section className={styles.home}>
            <div className="container">
                <div className={styles.home__inner}>
                    <h2 className={styles.home__title}>
                        Your Personalized Path to Success
                    </h2>
                    <p className={styles.home__text}>
                        Follow step-by-step roadmaps designed to guide you from
                        beginner to expert. Stay on track and achieve your
                        learning goals with confidence.
                    </p>
                    <Button className={styles.home__btn} variant="secondary">
                        <Link target="_blank" href={"https://roadmap.sh"}>
                            Explore Roadmaps
                        </Link>
                    </Button>
                    <div className={styles.home__darken} />
                    <div className={styles.home__bg}>
                        <Image
                            src="/img/background-roadmaps.jpg"
                            alt="bg"
                            fill
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeRoadmaps;

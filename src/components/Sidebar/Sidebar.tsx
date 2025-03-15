"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import cn from "classnames";

import { SidebarProps } from "./Sidebar.types";

import styles from "./Sidebar.module.scss";

const Sidebar = ({ list }: SidebarProps) => {
    const pathname = usePathname();

    return (
        <div className={styles.sidebar}>
            <nav className={styles.sidebar__menu}>
                <ul className={styles.sidebar__menu_list}>
                    {list.map((item, index: number) => (
                        <li
                            key={index}
                            className={styles.sidebar__menu_list_item}
                        >
                            <Link
                                className={cn(styles.sidebar__menu_link, {
                                    [styles.sidebar__menu_link_active]:
                                        pathname === item?.href
                                })}
                                href={item?.href}
                            >
                                <span
                                    className={styles.sidebar__menu_link_icon}
                                >
                                    {item?.icon}
                                </span>
                                <p className={styles.sidebar__menu_link_text}>
                                    {item?.title}
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;

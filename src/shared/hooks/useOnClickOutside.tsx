"use client";

import { useEffect, RefObject } from "react";

type Event = MouseEvent | TouchEvent;

const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
    ref: RefObject<T | null>,
    handler: (event: Event) => void
) => {
    useEffect(() => {
        const handleOnClickOutside = (event: Event) => {
            const element = ref?.current;

            if (!element || element.contains((event?.target as Node) || null)) {
                return;
            }

            handler(event);
        };

        document.addEventListener("mousedown", handleOnClickOutside);
        document.addEventListener("touchstart", handleOnClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleOnClickOutside);
            document.removeEventListener("touchstart", handleOnClickOutside);
        };
    }, [ref, handler]);
};

export default useOnClickOutside;

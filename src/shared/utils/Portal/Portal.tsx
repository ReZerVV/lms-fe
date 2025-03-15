"use client";

import { ReactNode } from "react";
import { createPortal } from "react-dom";

import { useMounted } from "@/shared";

const Portal = ({ children }: { children: ReactNode }) => {
    const { mounted } = useMounted();

    return mounted ? createPortal(children, document.body) : null;
};

export default Portal;

import { ReactNode } from "react";
import type { Metadata } from "next";

import { AuthLayout, MainLayout } from "@/layouts";

import "@/shared/styles/styles.scss";

export const metadata: Metadata = {
    title: "KnowWay",
    description: "E-Learning Platform"
};

export default function RootLayout({
    children
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <MainLayout>
                    <AuthLayout>{children}</AuthLayout>
                </MainLayout>
            </body>
        </html>
    );
}

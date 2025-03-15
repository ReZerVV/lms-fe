"use client";

import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import { QueryClientProvider } from "@tanstack/react-query";

import { Footer, Header } from "@/widgets";

import { useQueryClientProvider } from "@/shared";

const MainLayout = ({ children }: { children: ReactNode }) => {
    const queryClient = useQueryClientProvider();

    return (
        <QueryClientProvider client={queryClient}>
            <div className="wrapper">
                <Header />
                <main className="main">{children}</main>
                <Footer />
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    closeOnClick
                    theme="light"
                />
            </div>
        </QueryClientProvider>
    );
};

export default MainLayout;

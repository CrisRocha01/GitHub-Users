import type { Metadata } from "next";
import { Open_Sans, Roboto } from "next/font/google";
import "./globals.scss";
import Header from "./components/Header";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
    title: "Github Profile",
    description: "CRIS DEV",
};

const roboto = Roboto({
    subsets: ["cyrillic"],
    weight: ["100", "400", "500", "700", "900"],
    style: ["italic", "normal"],
    variable: "--font-roboto",
});
const openSans = Open_Sans({
    subsets: ["cyrillic"],
    weight: ["400", "500", "700"],
    style: ["italic", "normal"],
    variable: "--font-open-sans",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body className={`${openSans.variable} ${roboto.variable}`}>
                <Header />
                <Suspense fallback={<Loading />}>{children}</Suspense>
            </body>
        </html>
    );
}

import { FC, PropsWithChildren } from "react";
import '@/app/ui/globals.css'
import { raleway } from "./ui/fonts";

const RootLayout: FC<PropsWithChildren> = ({children}) => {
    return (
        <html>
            <body className={`${raleway.className} antialiased`}>{children}</body>
        </html>
    );
};

export default RootLayout;
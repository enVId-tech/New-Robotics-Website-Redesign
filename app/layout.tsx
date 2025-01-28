import React from "react";
import '@/styles/globals.scss';
import icon from '@/public/logos/OARoboticsLogo_24-25.webp';

export const metadata = {
    title: 'OA Robotics Website',
    description: 'Developed by the FRC 4079 Robotics Team',
    icons: [
        {
            rel: 'icon',
            type: 'image/png',
            url: icon.src,
        },
        {
            rel: 'apple-touch-icon',
            url: icon.src,
        },
    ],
}

export default function RootLayout({children}: { children: React.ReactNode }): React.ReactElement {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    )
}

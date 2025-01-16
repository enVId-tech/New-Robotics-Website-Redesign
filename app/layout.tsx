import React from "react";
import '@/styles/globals.scss';

export const metadata = {
    title: 'The FRC 4079 Robotics Website',
    description: 'Developed by the FRC 4079 Robotics Team',
}

export default function RootLayout({children}: { children: React.ReactNode }): React.ReactElement {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    )
}

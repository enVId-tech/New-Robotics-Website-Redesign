import React from "react";
import '@/app/globals.scss';
import img from "@/public/logos/OARoboticsLogo_24-25.webp";
import { EditModeProvider } from '@/contexts/EditModeContext';
import { ContentProvider } from '@/contexts/ContentContext';
import EditToolbar from '@/components/editable/EditToolbar';

export const metadata = {
    title: 'OA Robotics Website',
    description: 'The official website for Oxford Academy Robotics',
    keywords: 'Oxford Academy, Robotics, FRC, FTC, VEX, Oxford Academy Robotics',
    icons: [
        {rel: 'manifest', url: `${img.src}`},
        {rel: 'apple-touch-icon', url: `${img.src}`},
        {rel: 'icon', url: `${img.src}`}
    ]
}

export default function RootLayout({children}: { children: React.ReactNode }): React.ReactElement {
    return (
        <html lang="en">
        <body>
            <ContentProvider>
                <EditModeProvider>
                    <EditToolbar />
                    {children}
                </EditModeProvider>
            </ContentProvider>
        </body>
        </html>
    )
}

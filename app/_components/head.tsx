"use server";
import React from 'react';
import Head from 'next/head';
import icon from '@/public/logos/OARoboticsLogo_24-25.webp';

interface HeadProps {
    headTitle?: string;
    description?: string;
}

export default async function MainHead({headTitle = "Website", description = "Developed by the OA Robotics Marketing Team"}: HeadProps): Promise<React.ReactElement> {
    return (
        <Head>
            <title>OA Robotics - {headTitle}</title>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
            <meta name="description" content={description}/>
            <meta name="keywords" content="Oxford Academy, Robotics, FRC, FTC, VEX, Oxford Academy Robotics"/>
            <meta name="author" content="Erick Tran"/>
            <meta name="robots" content="index, follow"/>
            <meta name="theme-color" content="#000000"/>
            <link rel="manifest" href={icon.src}/>
            <link rel="apple-touch-icon" href={icon.src}/>
        </Head>
    )
}
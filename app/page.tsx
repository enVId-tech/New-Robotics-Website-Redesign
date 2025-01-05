"use server";
import React from "react";
import {Work_Sans} from "next/font/google";
import {NextFont} from "next/dist/compiled/@next/font";

const Work_Sans_300: NextFont = Work_Sans({
    weight: "300",
    style: 'normal',
    subsets: ['latin'],
})

export default async function Home(): Promise<React.ReactElement> {
    return (
        <>

        </>
    )
}
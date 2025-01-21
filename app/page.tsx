"use server";
import React from "react";
import {Work_Sans} from "next/font/google";
import {NextFont} from "next/dist/compiled/@next/font";
import Navbar from "@/app/_components/navbar";
import styles from "@/styles/home.module.scss";
import Footer from "@/app/_components/footer";
import Title from "@/app/_components/title";

const Work_Sans_300: NextFont = Work_Sans({
    weight: "300",
    style: 'normal',
    subsets: ['latin'],
})

export default async function Home(): Promise<React.ReactElement> {

    return (
        <div id={`${styles.homepage}`}>
            <Navbar/>
            <Title />
            <Footer/>
        </div>
    )
}
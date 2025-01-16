"use server";
import React from "react";
import {Work_Sans} from "next/font/google";
import {NextFont} from "next/dist/compiled/@next/font";
import Navbar from "@/app/_components/navbar";
import styles from "@/styles/home.module.scss";
import Footer from "@/app/_components/footer";

const Work_Sans_300: NextFont = Work_Sans({
    weight: "300",
    style: 'normal',
    subsets: ['latin'],
})

export default async function Home(): Promise<React.ReactElement> {
    return (
        <div id={`${styles.homepage}`}>
            <Navbar/>
            <div className={`${styles.top}`}>
                <h1>Welcome to the FRC 4079 Robotics Website</h1>
                <p>Developed by the FRC 4079 Robotics Team</p>
            </div>
            <Footer/>
        </div>
    )
}
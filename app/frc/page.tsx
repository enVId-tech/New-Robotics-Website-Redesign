"use server";
import React from "react";
import styles from "@/styles/vex.module.scss";
import Navbar from "@/app/_components/navbar";
import Footer from "@/app/_components/footer";

export default async function FRC(): Promise<React.ReactElement> {
    return (
        <div id={`${styles.frc}`}>
            <Navbar/>
            <h1>FRC</h1>
            <Footer/>
        </div>
    )
}
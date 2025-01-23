"use server";
import React from "react";
import styles from "@/styles/vex.module.scss";
import Navbar from "@/app/_components/navbar";
import Footer from "@/app/_components/footer";

export default async function Vex(): Promise<React.ReactElement> {
    return (
        <div id={`${styles.vex}`}>
            <Navbar/>
            <h1>VEX</h1>
            <Footer/>
        </div>
    )
};
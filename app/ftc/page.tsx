"use server";
import React from "react";
import styles from "@/styles/vex.module.scss";
import Navbar from "@/app/_components/navbar";
import Footer from "@/app/_components/footer";

export default async function FTC(): Promise<React.ReactElement> {
    return (
        <div id={`${styles.ftc}`}>
            <Navbar/>
            <h1>FTC</h1>
            <Footer/>
        </div>
    )
}
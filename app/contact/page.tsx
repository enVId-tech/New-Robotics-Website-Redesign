"use server";
import React from "react";
import styles from "@/styles/vex.module.scss";
import Navbar from "@/app/_components/navbar";
import Footer from "@/app/_components/footer";
import Title from "@/app/_components/title";

export default async function Contact(): Promise<React.ReactElement> {
    return (
        <div id={`${styles.contact}`}>
            <Navbar/>
            <Title title={"Contact Us"} description={"We would love to hear from you!"}/>
            <Footer/>
        </div>
    )
}
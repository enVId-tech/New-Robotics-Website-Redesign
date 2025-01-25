"use server";
import React from "react";
import styles from "@/styles/vex.module.scss";
import Navbar from "@/app/_components/navbar";
import Footer from "@/app/_components/footer";
import Title from "@/app/_components/title";
import img1 from "@/public/images/AboutBanner.jpg";

export default async function About(): Promise<React.ReactElement> {
    return (
        <div id={`${styles.about}`}>
            <Navbar/>
            <Title
                title={"About Us"}
                description={"Learn more about our team and mission."}
                img={img1}
                bgMoveUp={50}
            />
            <Footer/>
        </div>
    )
}
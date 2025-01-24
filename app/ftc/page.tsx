"use server";
import React from "react";
import styles from "@/styles/vex.module.scss";
import Navbar from "@/app/_components/navbar";
import Footer from "@/app/_components/footer";
import img1 from "@/public/images/ftc.jpg";
import Title from "@/app/_components/title";

export default async function FTC(): Promise<React.ReactElement> {
    return (
        <div id={`${styles.ftc}`}>
            <Navbar/>
            <Title
                title={"FIRST Tech Challenge"}
                description={"FTC Teams 19812 & 23796"}
                img={img1}
                bgMoveUp={50}
            />
            <Footer/>
        </div>
    )
}
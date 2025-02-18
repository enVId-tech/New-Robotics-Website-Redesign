"use server";
import React from "react";
import styles from "@/app/contact/contact.module.scss";
import Navbar from "@/app/_components/navbar/navbar";
import Footer from "@/app/_components/footer/footer";
import Title from "@/app/_components/title/title";
import GeneralContact from "@/app/contact/_components/generalContact/generalContact";
import Donations from "@/app/contact/_components/donations/donations";

export default async function Contact(): Promise<React.ReactElement> {
    return (
        <div id={`${styles.contact}`}>
            <Navbar/>
            <Title title={"Contact Us"} description={"We would love to hear from you!"}/>
            <GeneralContact
        email={"contact@oarobotics.org"}
        phone={"+1 (123) 456-7890"}
            />
            <Donations/>
            <Footer/>
        </div>
    )
}
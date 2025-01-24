"use client";
import React from "react";
import styles from "@/styles/_components/pagebody.module.scss";

export default function PageBody(): React.ReactElement {
    return (
        <div className={styles.pagebody}>
            <h1>Welcome to the OA Robotics Website</h1>
            <p>We are a team of passionate individuals dedicated to advancing robotics technology.</p>
        </div>
    );
}
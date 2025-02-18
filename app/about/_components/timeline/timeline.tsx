import React from 'react';
import styles from "@/app/about/_components/timeline/timeline.module.scss";
import {TW_700, TW_900} from "@/utils/globalFonts";

type TimelineProps = {
    children?: React.ReactNode;
}

export default async function Timeline({ children }: TimelineProps): Promise<React.ReactElement> {
    return (
        <section className={`${styles.timeline} ${TW_700}`}>
            <div className={styles.container}>
                <div className={styles.timelineContent}>
                    <img src={"/images/robotics/group.jpeg"} alt="Oxford Academy Robotics"/>
                    <span className={`${styles.text} ${TW_900}`}>
                        <h1>Origins</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit consectetur odio in ullamcorper. Nunc dictum condimentum tellus, a mollis leo interdum vel. Aenean eu turpis sed massa tincidunt consequat at eu ante. Fusce ultricies ipsum sed vulputate molestie. Proin faucibus arcu neque. Vestibulum non gravida eros, ac varius massa. Phasellus bibendum ipsum urna, sed luctus enim commodo id.</p>
                    </span>
                </div>
                <div className={styles.timelineContent2}>
                    <img src={"/images/robotics/group.jpeg"} alt="Oxford Academy Robotics"/>
                    <span className={`${styles.text} ${TW_900}`}>
                        <h1>Today</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit consectetur odio in ullamcorper. Nunc dictum condimentum tellus, a mollis leo interdum vel. Aenean eu turpis sed massa tincidunt consequat at eu ante. Fusce ultricies ipsum sed vulputate molestie. Proin faucibus arcu neque. Vestibulum non gravida eros, ac varius massa. Phasellus bibendum ipsum urna, sed luctus enim commodo id.</p>
                    </span>
                </div>
                <div className={styles.timelineContent}>
                    <img src={"/images/robotics/group.jpeg"} alt="Oxford Academy Robotics"/>
                    <span className={`${styles.text} ${TW_900}`}>
                        <h1>Our Future</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit consectetur odio in ullamcorper. Nunc dictum condimentum tellus, a mollis leo interdum vel. Aenean eu turpis sed massa tincidunt consequat at eu ante. Fusce ultricies ipsum sed vulputate molestie. Proin faucibus arcu neque. Vestibulum non gravida eros, ac varius massa. Phasellus bibendum ipsum urna, sed luctus enim commodo id.</p>
                    </span>
                </div>
            </div>
            {children}
        </section>
    )
}
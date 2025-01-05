import React from 'react';
import '@/styles/globals.scss';
import type {AppProps} from 'next/app';

function RoboticsWebsite({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />
}

export default RoboticsWebsite;
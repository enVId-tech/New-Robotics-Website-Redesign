import React from 'react';
import '@/app/globals.scss';
import type {AppProps} from 'next/app';

function RoboticsWebsite({Component, pageProps}: AppProps): React.ReactElement {
    return <Component {...pageProps} />
}

export default RoboticsWebsite;
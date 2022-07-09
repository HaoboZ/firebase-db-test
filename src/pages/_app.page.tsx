import { getDatabase } from 'firebase/database';
import { AppProps } from 'next/app';
import { app } from '../firebase/client';

const db = getDatabase( app );

// noinspection JSUnusedGlobalSymbols
export default function _App( { Component, pageProps }: AppProps ) {
	return (
		<Component {...pageProps}/>
	);
}

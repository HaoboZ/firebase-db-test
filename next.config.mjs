/**
 * @type {import('next/dist/server/config-shared').NextConfigComplete}
 */
const nextConfig = {
	pageExtensions: [ 'page.js', 'page.jsx', 'page.ts', 'page.tsx' ],
	typescript    : { ignoreBuildErrors: true },
	headers       : async () => [ {
		// matching all API routes
		source : '/api/:path*',
		headers: [ { key: 'Access-Control-Allow-Origin', value: '*' } ]
	} ]
};

// noinspection JSUnusedGlobalSymbols
export default nextConfig;

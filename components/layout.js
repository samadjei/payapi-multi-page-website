import Navbar from './navbar';
import Head from 'next/head';

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Frontend Mentor | PayAPI Website Challenge</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />

				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Public+Sans:wght@400;700&display=swap" rel="stylesheet" />
			</Head>
			<main>
				<Navbar />
				{children}
			</main>
		</>
	);
};

export default Layout;

import Navbar from './navbar';
import Head from 'next/head';
import Footer from './footer';

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Frontend Mentor | PayAPI Website Challenge</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"></link>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Public+Sans:wght@400;700&display=swap" rel="stylesheet" />
			</Head>
			<div>
				<Navbar />
				{children}
				<Footer />
			</div>
		</>
	);
};

export default Layout;

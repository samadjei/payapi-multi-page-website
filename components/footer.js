import Image from 'next/image';
import Link from 'next/link';
import Socials from './socials';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-overlay"></div>
			<div className="footer__inner container">
				<div className="footer__left">
					<div className="footer__logo">
						<Link href="/">
							<Image src="/logo-white.svg" alt="Scoot logo" width={107.82} height={28.56} alt="Logo" />
						</Link>
					</div>
					<div className="footer__links">
						<Link href="/pricing">
							<a className="footer--items">Pricing</a>
						</Link>
						<Link href="/about">
							<a className="footer--items">About</a>
						</Link>
						<Link href="/contact">
							<a className="footer--items">Contact</a>
						</Link>
					</div>
				</div>
				<div className="footer__right">
					<Socials />
				</div>
			</div>
		</footer>
	);
};

export default Footer;

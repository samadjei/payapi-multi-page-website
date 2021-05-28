import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../components/button';

const Navbar = () => {
	return (
		<nav className="navbar container">
			<div className="navbar__left">
				<div className="navbar__logo">
					<Link href="/">
						<Image src="/logo.svg" alt="Scoot logo" width={107.82} height={28.56} alt="Logo" />
					</Link>
				</div>
				<div className="navbar__links">
					<Link href="/pricing">
						<a>Pricing</a>
					</Link>
					<Link href="/about">
						<a>About</a>
					</Link>
					<Link href="/contact">
						<a>Contact</a>
					</Link>
				</div>
			</div>
			<div className="cta">
				<Link href="/">
					<Button className="btn hero--btn" buttonStyle="btn--primary" buttonSize="btn--desktop">
						Schedule a Demo
					</Button>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;

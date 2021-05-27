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
					<Link href="/about">
						<a>About Us</a>
					</Link>
					<Link href="/location">
						<a>Location</a>
					</Link>
					<Link href="/careers">
						<a>Careers</a>
					</Link>
				</div>
			</div>
			<div className="cta">
				<Link href="/">
					<Button className="btn hero--btn" buttonStyle="btn--primary" buttonSize="btn--desktop">
						Get Scootin
					</Button>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;

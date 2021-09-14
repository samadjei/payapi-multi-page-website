import Image from 'next/image';
import Link from 'next/link';
import { Component } from 'react';
import { Button } from './button';

class Nav extends Component {
	state = { clicked: false };
	handleClick = () => {
		this.setState({ clicked: !this.state.clicked });
	};
	render() {
		return (
			<header className="navbar">
				<div className="navbar__logo">
					<Link href="/">
						<Image src="/logo.svg" alt="Payapi logo" width={135} height={38} alt="Logo" />
					</Link>
				</div>
				<div className="menu-icon" onClick={this.handleClick}>
					<i className={this.state.clicked ? 'fas fa-times active' : 'fas fa-bars'}></i>
				</div>
				<ul className={this.state.clicked ? 'navbar__links active' : 'navbar__links'}>
					<Link href="/pricing">
						<a className="navbar--items">Pricing</a>
					</Link>
					<Link href="/about">
						<a className="navbar--items">About</a>
					</Link>
					<Link href="/contact">
						<a className="navbar--items">Contact</a>
					</Link>
					<Link href="/">
						<Button className="btn " buttonStyle="btn--primary" buttonSize="btn--nav">
							Schedule a demo
						</Button>
					</Link>
				</ul>
			</header>
		);
	}
}

export default Nav;

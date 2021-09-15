import Basic from '../form/emailForm';
import Image from 'next/image';

const Hero = () => {
	return (
		<section className="hero">
			<div className="hero__inner container">
				<div className="hero__left">
					<h1 className="hero--title">Start building with our APIs for absolutely free.</h1>
					<Basic className="hero__email" />
					<p className="hero--question">
						Have any questions? <span className="hero--contact">Contact Us</span>
					</p>
				</div>
				<div className="hero__right">
					<Image src="/assets/home/desktop/illustration-phone-mockup.svg" alt="Phone mockup" width={419} height={660} />
				</div>
			</div>
		</section>
	);
};

export default Hero;

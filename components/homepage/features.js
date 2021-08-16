import Image from 'next/image';

const Features = () => {
	return (
		<section className="features">
			<div className="features__circle"></div>
			<div className="container">
				<div className=" features__inner features__top">
					<div className="features__image">
						<Image src="/assets/home/desktop/illustration-easy-to-implement.svg" alt="Phone mockup" width={605} height={444} />
					</div>
					<div className="features__right features__content">
						<h2>Easy to implement</h2>
						<p className="features--description">Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.</p>
					</div>
				</div>
				<div className="features__bottom">
					<div className="features__left features__content">
						<h2>Simple UI & UX</h2>
						<p className="features--description">Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion.</p>
					</div>
					<div className="features__right features__bottom-images">
						<Image src="/assets/home/desktop/illustration-simple-ui.svg" alt="Phone mockup" width={772} height={660} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;

import Image from 'next/image';

const AboutHero = () => {
	return (
		<section className="about">
			<div className="about__pad container">
				<div className="about__header">
					<h1 className="small">We empower innovators by delivering access to the financial system</h1>
				</div>
				<div className="about__values">
					<div className="about__option">
						<div className="subheading">
							<h3 className="about--subhead">Our Vision</h3>
						</div>
						<p className="about--description">Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology.</p>
					</div>
					<div className="about__option">
						<h3 className="about--subhead">Our Business</h3>
						<p className="about--description">At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers.</p>
					</div>
				</div>
			</div>
			<div className="about-overlay">
				{/* <Image className='imagess' src="/assets/about/desktop/image-team-members.jpg" alt="Phone mockup" width={1440} height={500} /> */}
			</div>
		</section>
	);
};

export default AboutHero;

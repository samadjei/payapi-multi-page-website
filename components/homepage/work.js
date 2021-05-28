import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../button';

const Work = () => {
	return (
		<section className="work">
			<div className="work-overlay"></div>
			<div className="work__inner container">
				<div className="work__left">
					<h2 className="work--title">Who we work with</h2>
					<p className="work--description">Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users.</p>
					<div className="cta">
						<Link href="/about">
							<Button className="btn hero--btn" buttonStyle="btn--secondary" buttonSize="btn--desktop">
								About Us
							</Button>
						</Link>
					</div>
				</div>
				<div className="work__right">
					<Image src="/assets/shared/desktop/tesla.svg" alt="Phone mockup" width={131} height={17} />
					<Image src="/assets/shared/desktop/microsoft.svg" alt="Phone mockup" width={148} height={31} />
					<Image src="/assets/shared/desktop/hewlett-packard.svg" alt="Phone mockup" width={142} height={27} />
					<Image src="/assets/shared/desktop/oracle.svg" alt="Phone mockup" width={131} height={17} />
					<Image src="/assets/shared/desktop/google.svg" alt="Phone mockup" width={97} height={33} />
					<Image src="/assets/shared/desktop/nvidia.svg" alt="Phone mockup" width={139} height={26} />
				</div>
			</div>
		</section>
	);
};

export default Work;

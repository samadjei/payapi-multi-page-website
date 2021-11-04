import Features from '../components/homepage/features';
import Hero from '../components/homepage/hero';
import Offers from '../components/homepage/offers';
import Subscription from '../components/homepage/subscription';
import Work from '../components/homepage/work';
import Image from 'next/image';

const Homepage = () => {
	return (
		<main className="main">
			<div className="bg-pattern">
				<Image src="/assets/shared/desktop/bg-pattern-circle.svg" width={780} height={780} />
			</div>
			<Hero />
			<Work />
			<Features />
			<Offers />
			<Subscription />
		</main>
	);
};

export default Homepage;

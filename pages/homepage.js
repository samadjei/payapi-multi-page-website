import Features from '../components/homepage/features';
import Hero from '../components/homepage/hero';
import Offers from '../components/homepage/offers';
import Subscription from '../components/homepage/subscription';
import Work from '../components/homepage/work';

const Homepage = () => {
	return (
		<main className="main">
			<Hero />
			<Work />
			<Features />
			<Offers />
			<Subscription />
		</main>
	);
};

export default Homepage;

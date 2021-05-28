import Image from 'next/image';

const Offers = () => {
	return (
		<div className="offers">
			<div className="offers__inner container">
				<div className="offer__item">
					<Image src="/assets/home/desktop/icon-personal-finances.svg" alt="Phone mockup" width={106} height={106} />
					<h3 className="offers--title small">Personal Finances</h3>
					<p>Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account.</p>
				</div>
				<div className="offer__item">
					<Image src="/assets/home/desktop/icon-banking-and-coverage.svg" alt="Phone mockup" width={106} height={106} />
					<h3 className="offers--title small">Banking & Coverage</h3>
					<p>With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.</p>
				</div>
				<div className="offer__item">
					<Image src="/assets/home/desktop/icon-personal-finances.svg" alt="Phone mockup" width={106} height={106} />
					<h3 className="offers--title small">Consumer Payments</h3>
					<p>It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.</p>
				</div>
			</div>
		</div>
	);
};

export default Offers;

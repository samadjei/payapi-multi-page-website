import Link from 'next/link';
import { Button } from '../../components/button';
import Subscription from '../homepage/subscription';
import Ticked from '../ticked';
import Image from 'next/image';

const Plans = () => {
	return (
		<section className="plans">
			
			<div className="container">
				<div className="plans__title">
					<h2>Pricing</h2>
				</div>
				<div className="plans__inner">
					{/* Free Plan */}
					<div className="plans__items">
						<h3 className="plans--title">Free Plan</h3>
						<p className="plans--description">Build and test using our core set of products with up to 100 API requests</p>
						<p className="plans--price">$0.00</p>
						<hr className="plans__hr" />
						<ul className="plans__options">
							<div className="plans__ticked">
								<Ticked />
								<li className="plans--selected">Transactions</li>
							</div>
							<div className="plans__ticked">
								<Ticked />
								<li className="plans--selected">Auth</li>
							</div>
							<div className="plans__ticked">
								<Ticked />
								<li className="plans--selected">Identity</li>
							</div>
							<li>Investments</li>
							<li>Assets</li>
							<li>Liabilities</li>
							<li>Request Access</li>
						</ul>
						<hr className="plans__hr" />
						<Link href="/">
							<Button className="btn" buttonStyle="btn--tertiary" buttonSize="btn--desktop">
								Request Access
							</Button>
						</Link>
					</div>
					{/* Basic Plan */}
					<div className="plans__items">
						<h3 className="plans--title">Basic Plan</h3>
						<p className="plans--description">Launch your project with unlimited requests and no contractual minimums</p>
						<p className="plans--price">$249.00</p>
						<hr className="plans__hr" />
						<ul className="plans__options">
							<div className="plans__ticked">
								<Ticked />
								<li className="plans--selected">Transactions</li>
							</div>
							<div className="plans__ticked">
								<Ticked />
								<li className="plans--selected">Auth</li>
							</div>
							<div className="plans__ticked">
								<Ticked />
								<li className="plans--selected">Identity</li>
							</div>
							<div className="plans__ticked">
								<Ticked />
								<li className="plans--selected">Investments</li>
							</div>
							<div className="plans__ticked">
								<Ticked />
								<li className="plans--selected">Assets</li>
							</div>
							<li>Liabilities</li>
							<li>Request Access</li>
						</ul>
						<hr className="plans__hr" />
						<Link href="/">
							<Button className="btn hero--btn" buttonStyle="btn--tertiary" buttonSize="btn--desktop">
								Request Access
							</Button>
						</Link>
					</div>
					{/* Premium Plan */}
					<div className="plans__items">
						<h3 className="plans--title">Premium Plan</h3>
						<p className="plans--description">Get tailored solutions, volume pricing, and dedicated support for your team</p>
						<p className="plans--price">$499.00</p>
						<hr className="plans__hr" />

						<ul className="plans__options">
							<div className="plans__ticked">
								<Ticked />
								<li className="plans--selected">Transactions</li>
							</div>
							<div className="plans__ticked">
								<Ticked />
								<li className="plans--selected">Auth</li>
							</div>
							<div className="plans__ticked">
								<Ticked />
								<li className="plans--selected">Identity</li>
							</div>
							<div className="plans__ticked">
								<Ticked />
								<li className="plans--selected">Investments</li>
							</div>
							<div className="plans__ticked">
								<Ticked />
								<li className="plans--selected">Assets</li>
							</div>
							<div className="plans__ticked">
								<Ticked />
								<li className="plans--selected">Liabilities</li>
							</div>
							<div className="plans__ticked">
								<Ticked />
								<li className="plans--selected">Request Access</li>
							</div>
						</ul>
						<hr className="plans__hr" />
						<Link href="/">
							<Button className="btn hero--btn" buttonStyle="btn--tertiary" buttonSize="btn--desktop">
								Request Access
							</Button>
						</Link>
					</div>
				</div>
				<Subscription className="pricing__cta" />
			</div>
		</section>
	);
};

export default Plans;
<section className="plans">
	<div className="container">
		<div className="plans__inner"></div>
	</div>
</section>;

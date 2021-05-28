import Email from '../form/emailForm';

const Subscription = () => {
	return (
		<div className="subscription">
			<div className="subscription__inner container">
				<div className="subscription__left">
					<h2>Ready to start?</h2>
				</div>
				<div className="subscription__right">
					<Email className="righty" />
				</div>
			</div>
		</div>
	);
};

export default Subscription;

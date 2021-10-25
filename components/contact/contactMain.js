import React from 'react';
import ContactForm from '../form/contactForm';
import Image from 'next/image';

const contactMain = () => {
	return (
		<div className="container">
			<h2 className="contact--title">Submit a help request and we’ll get in touch shortly.</h2>
			<div className="contact__inner">
				<ContactForm />
				<div className="contact__right">
					<h4 className="contact--subhead">Join the thousands of innovators already building with us</h4>
					<div className="contact__companies">
						<Image src="/assets/darkicons/tesla.svg" alt="Phone mockup" width={131} height={17} />
						<Image src="/assets/darkicons/microsoft.svg" alt="Phone mockup" width={148} height={31} />
						<Image src="/assets/darkicons/hewlett-packard.svg" alt="Phone mockup" width={142} height={27} />
						<Image src="/assets/darkicons/oracle.svg" alt="Phone mockup" width={131} height={17} />
						<Image src="/assets/darkicons/google.svg" alt="Phone mockup" width={97} height={33} />
						<Image src="/assets/darkicons/nvidia.svg" alt="Phone mockup" width={139} height={26} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default contactMain;

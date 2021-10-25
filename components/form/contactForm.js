import React from 'react';
import { Formik, Form, Field, useField } from 'formik';
import * as Yup from 'yup';
import { Button } from '../../components/button';

const CustomTextInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<input className="text-input" {...field} {...props} />
			{meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
		</>
	);
};

const CustomCheckbox = ({ children, ...props }) => {
	const [field, meta] = useField(props, 'checkbox');

	return (
		<>
			<label className="checkbox">
				<input type="checkbox" {...field} {...props} />
				{children}
			</label>
			{meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
		</>
	);
};

const ContactForm = () => {
	return (
		<>
			<Formik
				initialValues={{
					name: '',
					email: '',
					company: '',
					title: '',
					message: '',
					acceptedTerms: false,
				}}
				validationSchema={Yup.object({
					name: Yup.string().min(3, 'Must be at least 3 characters').max(15, 'Must be 15 characters or less').required("This field can't be empty"),
					email: Yup.string().email('Invalid email address').required("This field can't be empty"),
					acceptedTerms: Yup.boolean().required('Required').oneOf([true], 'You must accept the terms and conditions'),
				})}
				onSubmit={(values, { setSubmitting, resetForm }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						resetForm();
						setSubmitting(false);
					}, 3000);
				}}
			>
				{(props) => (
					<Form className="contact__form">
						<CustomTextInput className="contact__item" name="name" type="text" placeholder="Name" />
						<CustomTextInput className="contact__item" name="email" type="email" placeholder="Email Address" />
						<CustomTextInput className="contact__item" name="company" type="text" placeholder="Company Name" />
						<CustomTextInput className="contact__item" name="Title" type="text" placeholder="Title" />
						<CustomTextInput className="contact__item" name="Text" type="textarea" placeholder="Message" />
						<div className="contact__checker">
							<CustomCheckbox className="contact__checkbox" name="acceptedTerms"></CustomCheckbox>
							<p className="contact--accept">Stay up-to-date with company announcements and updates to our API</p>
						</div>
						<Button className="btn hero--btn" buttonStyle="btn--tertiary" buttonSize="btn--desktop">
							{props.isSubmitting ? 'Loading...' : 'Submit'}
						</Button>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default ContactForm;

import { Formik, Form, Field, useField } from 'formik';
import * as Yup from 'yup';

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
					name: Yup.string().min(3, 'Must be at least 3 characters').max(15, 'Must be 15 characters or less').required('Required'),
					email: Yup.string().email('Invalid email address').required('Required'),
					acceptedTerms: Yup.boolean().required('Required'),
					// .oneOf([true], 'You must accept the terms and conditions'),
				})}
				onSubmit={(values, { setSubmitting, resetForm }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						resetForm();
						setSubmitting(false);
					}, 3000);
				}}
			>
				{(prop, isSubmitting) => (
					<Form>
						<CustomTextInput name="name" type="text" placeholder="Name" />
						<CustomTextInput name="email" type="email" placeholder="Email Address" />
						<CustomTextInput name="company" type="text" placeholder="Company Name" />
						<CustomTextInput name="Title" type="text" placeholder="Title" />
						<CustomTextInput name="Text" type="textarea" placeholder="Message" />
						<CustomCheckbox name="acceptedTerms">Stay up-to-date with company announcements and updates to our API</CustomCheckbox>
						<button className="hero__cta hero--primary cta--positioning" type="submit" disabled={isSubmitting}>
							Schedule a Demo
						</button>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default ContactForm;

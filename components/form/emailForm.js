import { Formik, Form, Field } from 'formik';

const Email = () => (
	<div>
		<Formik
			initialValues={{ email: '' }}
			// validate={(values) => {
			// 	const errors = {};

			// 	if (!values.email) {
			// 		errors.email = 'Required';
			// 	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
			// 		errors.email = 'Invalid email address';
			// 	}

			// 	return errors;
			// }}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));

					setSubmitting(false);
				}, 400);
			}}
		>
			{({ isSubmitting }) => (
				<Form className="hero__form">
					<Field className="hero__field hero__form--input" type="email" name="email" placeholder="Enter email address" />

					{/* <ErrorMessage name="email" component="div" /> */}

					<button className="hero__cta hero--primary cta--positioning" type="submit" disabled={isSubmitting}>
						Schedule a Demo
					</button>
				</Form>
			)}
		</Formik>
	</div>
);

export default Email;

// Render Prop

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Basic = () => (
	<div>
		<Formik
			initialValues={{ email: '' }}
			validate={(values) => {
				const errors = {};

				if (!values.email) {
					errors.email = 'Required';
				} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
					errors.email = 'Invalid email address';
				}

				return errors;
			}}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));

					setSubmitting(false);
				}, 400);
			}}
		>
			{({ isSubmitting }) => (
				<Form>
					<Field className="hero__field" type="email" name="email" placeholder="Enter email address" />

					<ErrorMessage name="email" component="div" />

					<button type="submit" disabled={isSubmitting}>
						Submit
					</button>
				</Form>
			)}
		</Formik>
	</div>
);

export default Basic;

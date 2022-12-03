import React, { useState } from 'react';
import Toast from '../components/Toast';
import Section from '../sections/Section';
import { FormDataProps } from '../types/Formdata';

const Contact = () => {
  document.title = 'Lester Ong | Contact';

  const initialValues = {
    name: '',
    email: '',
    message: '',
  };
  const [values, setValues] = useState(initialValues);

  const initialValidation = {
    name: false,
    email: false,
    message: false,
  };
  const [startValidation, setStartValidation] = useState(initialValidation);

  const initialErrors = {
    name: false,
    email: false,
    message: false,
  };
  const [errors, setErrors] = useState(initialErrors);

  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<any>) => {
    const type: 'name' | 'email' | 'message' = e.currentTarget.parentNode.htmlFor;
    setStartValidation({ ...startValidation, [type]: true });
    setErrors({ ...errors, [type]: false });
    // innerText and '' is to extract the value from the message-input div
    setValues({ ...values, [type]: e.target.value || e.currentTarget.innerText || '' });
  };

  const encode = (data: FormDataProps) => {
    return Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key as keyof typeof data])}`)
      .join('&');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const hasInvalidValue =
      Object.values(values)
        .map((v: string) => v.length)
        .includes(0) && e.currentTarget.checkValidity();
    if (hasInvalidValue) {
      setErrors({
        name: values.name.trim().length <= 0,
        email: values.email.trim().length <= 0 && e.currentTarget.checkValidity(),
        message: values.message.trim().length <= 0,
      });
      return;
    }

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        ...values,
      }),
    })
      .then(() => {
        setShowSuccess(true);
        setValues(initialValues);
        setStartValidation(initialValidation);
        setErrors(initialErrors);
        const elem = document.querySelector('#message-input');
        if (elem) {
          elem.innerHTML = ''; // Clears the message input
        }
        setTimeout(() => setShowSuccess(false), 4500);
      })
      .catch(() => {
        setShowError(true);
        setTimeout(() => setShowError(false), 4500);
      });
  };

  const handleValidation = (e: React.FocusEvent<any>) => {
    const type: 'name' | 'email' | 'message' = e.currentTarget.parentNode.htmlFor;
    if (!startValidation[type]) {
      return;
    }
    if (values[type].trim().length <= 0 || (e.target.validity && !e.target.checkValidity())) {
      setErrors({ ...errors, [type]: true });
    }
  };

  return (
    <>
      <Toast
        handleClose={() => setShowError(false)}
        isSuccess={false}
        message="An error occurred. Please try again, or contact me via email."
        isShowing={showError}
      />
      <Toast
        handleClose={() => setShowSuccess(false)}
        isSuccess
        message="Messaged sent successfully."
        isShowing={showSuccess}
      />
      <Section color="bg-color--primary">
        <h1 className="heading--primary">Contact</h1>
        <h2 className="heading--secondary">Let&apos;s Chat!</h2>
        <p>
          Fill up this form to contact me. Alternatively, drop me an{' '}
          <a className="nav-link" href="mailto:lesterong776@gmail.com">
            email
          </a>
          .
        </p>
        <form className="contact-form" method="post" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="name">
            Name
            <input type="text" name="name" onChange={handleChange} onBlur={handleValidation} value={values.name} />
            {errors.name && <span className="error">A name is required.</span>}
          </label>
          <label htmlFor="email">
            Email
            <input type="email" name="email" onChange={handleChange} onBlur={handleValidation} value={values.email} />
            {errors.email && <span className="error">A valid email is required.</span>}
          </label>
          <label htmlFor="message">
            Message
            <textarea className="hidden" name="message" onChange={handleChange} value={values.message} />
            <div id="message-input" contentEditable onInput={handleChange} onBlur={handleValidation} />
            {errors.message && <span className="error">A message is required.</span>}
          </label>
          <p>
            <button className="nav-link" type="submit">
              Send message <span className="right-arrow">&#x2192;</span>
            </button>
          </p>
        </form>
      </Section>
    </>
  );
};

export default Contact;

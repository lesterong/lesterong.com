import React, { useState } from 'react';
import Section from '../sections/Section';
import Bgcolors from '../types/Bgcolors';
import { FormDataProps } from '../types/Formdata';

const Contact = () => {
  document.title = 'Lester Ong | Contact';

  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const initialValidation = {
    name: false,
    email: false,
    message: false,
  };

  const initialErrors = {
    name: false,
    email: false,
    message: false,
  };

  const [values, setValues] = useState(initialValues);

  const [startValidation, setStartValidation] = useState(initialValidation);

  const [errors, setErrors] = useState(initialErrors);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setStartValidation({ ...startValidation, [e.target.name]: true });
    setErrors({ ...errors, [e.target.name]: false });
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleChangeMessage = (e: React.ChangeEvent<HTMLDivElement>) => {
    setStartValidation({ ...startValidation, message: true });
    setErrors({ ...errors, message: false });
    setValues({ ...values, message: e.currentTarget.innerText || '' });
  };

  const encode = (data: FormDataProps) => {
    return Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key as keyof typeof data])}`)
      .join('&');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(errors).includes(true)) {
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
        setValues(initialValues);
        setStartValidation(initialValidation);
        setErrors(initialErrors);
      })
      .catch((err) => console.log('Error :', err));
  };

  const handleEmpty = (type: 'name' | 'email' | 'message') => (e: React.FocusEvent<any>) => {
    if (!startValidation[type]) {
      return;
    }
    if (values[type].trim() === '') {
      setErrors({ ...errors, [type]: true });
    }
    if (type === 'email' && !e.target.checkValidity()) {
      setErrors({ ...errors, email: true });
    }
  };

  return (
    <Section color={Bgcolors.Beige}>
      <h1 className="mt-16 text-center">Contact</h1>
      <h2 className="mt-6">Let&apos;s chat!</h2>
      <p>
        Fill up this form to contact me. Alternatively, drop me an{' '}
        <a
          className="text-indigo-200 transition duration-200 hover:text-indigo-300"
          href="mailto:lesterong776@gmail.com"
        >
          email
        </a>
        .
      </p>
      <form className="mt-2 mb-8 flex max-w-xl flex-col space-y-2" method="post" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="name">
          Name
          <input type="text" name="name" onChange={handleChange} onBlur={handleEmpty('name')} value={values.name} />
          {errors.name && <span className="text-red-100">A name is required.</span>}
        </label>
        <label htmlFor="email">
          Email
          <input type="email" name="email" onChange={handleChange} onBlur={handleEmpty('email')} value={values.email} />
          {errors.email && <span className="text-red-100">A valid email is required.</span>}
        </label>
        <label htmlFor="message">
          Message
          <textarea className="hidden" name="message" onChange={handleChange} value={values.message} />
          <div
            className="message-input min-h-[144px]"
            contentEditable
            onInput={handleChangeMessage}
            onBlur={handleEmpty('message')}
          />
          {errors.message && <span className="text-red-100">A message is required.</span>}
        </label>
        <p>
          <button className="nav-link w-max" type="submit">
            Send message <span className="right-arrow inline-block">&#x2192;</span>
          </button>
        </p>
      </form>
    </Section>
  );
};

export default Contact;

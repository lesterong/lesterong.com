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

  const handleChange = (e: React.ChangeEvent<any>) => {
    const type: 'name' | 'email' | 'message' = e.currentTarget.parentNode.htmlFor;
    setStartValidation({ ...startValidation, [type]: true });
    setErrors({ ...errors, [type]: false });
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
        setValues(initialValues);
        setStartValidation(initialValidation);
        setErrors(initialErrors);
        const elem = document.querySelector('#message-input');
        if (elem) {
          elem.innerHTML = '';
        }
      })
      .catch((err) => console.log('Error :', err));
  };

  const handleValidation = (e: React.FocusEvent<any>) => {
    const type: 'name' | 'email' | 'message' = e.currentTarget.parentNode.htmlFor;
    if (!startValidation[type]) {
      return;
    }
    if (values[type].trim().length <= 0) {
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
          <input type="text" name="name" onChange={handleChange} onBlur={handleValidation} value={values.name} />
          {errors.name && <span className="text-red-100">A name is required.</span>}
        </label>
        <label htmlFor="email">
          Email
          <input type="email" name="email" onChange={handleChange} onBlur={handleValidation} value={values.email} />
          {errors.email && <span className="text-red-100">A valid email is required.</span>}
        </label>
        <label htmlFor="message">
          Message
          <textarea className="hidden" name="message" onChange={handleChange} value={values.message} />
          <div
            id="message-input"
            className="message-input min-h-[144px]"
            contentEditable
            onInput={handleChange}
            onBlur={handleValidation}
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

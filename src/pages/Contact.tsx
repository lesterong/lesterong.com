import Section from '../sections/Section';
import Bgcolors from '../types/Bgcolors';

const Contact = () => {
  document.title = 'Lester Ong | Contact';
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
      <form className="mt-2 mb-8 flex max-w-xl flex-col space-y-2" action="/" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="name">
          Name <input type="text" name="name" />
        </label>
        <label htmlFor="email">
          Email <input type="email" name="email" />
        </label>
        <label htmlFor="message">
          Message <textarea className="h-36 resize-none" name="message" />
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

import { Link } from 'react-router-dom';
import Section from '../sections/Section';
import Bgcolors from '../types/Bgcolors';

const NotFound = () => (
  <Section color={Bgcolors.Beige} isFillViewport isVerticallyCentered>
    <h1> Page not found.</h1>
    <p className="pt-6">
      Back to{' '}
      <Link className="text-indigo-200 hover:text-indigo-300" to="/">
        homepage
      </Link>
      .
    </p>
  </Section>
);

export default NotFound;

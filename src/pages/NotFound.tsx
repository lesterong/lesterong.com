import { Link } from 'react-router-dom';
import Section from '../sections/Section';
import BgColor from '../utils/BgColor';

const NotFound = () => {
  document.title = 'Lester Ong | Page Not Found';
  return (
    <Section color={BgColor.Base} isFillViewport isVerticallyCentered>
      <h1> Page not found.</h1>
      <p className="pt-6">
        Back to{' '}
        <Link className="nav-link" to="/">
          homepage
        </Link>
        .
      </p>
    </Section>
  );
};

export default NotFound;

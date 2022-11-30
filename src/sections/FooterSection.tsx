import Bgcolors from '../types/Bgcolors';
import Section from './Section';

const FooterSection = () => (
  <Section color={Bgcolors.Beige}>
    <hr className="border-gray-200" />
    <div className="max-w-xl">
      <h2 className="pt-6">Like what you see?</h2>
      <p className="pt-6 pb-6">I&apos;d love to work with you! Let&apos;s talk.</p>
    </div>
  </Section>
);

export default FooterSection;

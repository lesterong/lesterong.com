import Section from './Section';
import Skills from '../assets/Skills';

const SkillsSection = () => {
  return (
    <Section color="bg-color--tertiary" textColor="text-color--tertiary">
      <div className="home__skills">
        <h2>Skills</h2>
        <div className="content">
          <p>Familiar with...</p>
          <div>
            <Skills.Astro />
            <Skills.Javascript />
            <Skills.Typescript />
            <Skills.React />
            <Skills.Java />
            <Skills.Html />
            <Skills.Css />
            <Skills.Git />
            <Skills.Tailwind />
            <Skills.Figma />
            <Skills.Python />
          </div>

          <p>Experimented with...</p>
          <div>
            <Skills.Docker />
            <Skills.Django />
            <Skills.Sass />
            <Skills.Numpy />
            <Skills.Firebase />
            <Skills.PgSql />
            <Skills.Ruby />
            <Skills.RubyOnRails />
            <Skills.Nextjs />
            <Skills.Bootstrap />
          </div>

          <p>Currently playing around with...</p>
          <div>
            <Skills.Swift />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SkillsSection;

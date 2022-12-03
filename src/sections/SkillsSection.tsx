import Section from './Section';
import Skills from '../assets/Skills';

const SkillsSection = () => {
  return (
    <Section color="bg-color--secondary" textColor="text-color--secondary">
      <div className="home__skills">
        <h2>Skills</h2>
        <div className="content">
          <p>Familiar with...</p>
          <div>
            <Skills.Java />
            <Skills.Javascript />
            <Skills.Typescript />
            <Skills.React />
            <Skills.Html />
            <Skills.Css />
            <Skills.Git />
            <Skills.Tailwind />
            <Skills.Figma />
          </div>

          <p>Experimented with...</p>
          <div>
            <Skills.Python />
            <Skills.Numpy />
            <Skills.Firebase />
            <Skills.PgSql />
            <Skills.Ruby />
            <Skills.RubyOnRails />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SkillsSection;

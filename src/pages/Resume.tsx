import Section from '../sections/Section';

const Resume = () => {
  document.title = 'Lester Ong | Resume';
  return (
    <Section>
      <div className="resume">
        <h1 className="heading--primary">Resume</h1>
        <h2 className="heading--secondary">Lester Ong</h2>
        <p className="mb-10">A software engineer with a passion in design and animation.</p>

        <h3>Skills</h3>
        <section className="resume__skills">
          <div>
            <h4>Languages</h4>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript / TypeScript</p>
            <p>Swift</p>
            <p>SQL</p>
            <p>Java</p>
            <p>Python</p>
          </div>
          <div>
            <h4>Frameworks and Libraries</h4>
            <p>ReactJS</p>
            <p>Astro</p>
            <p>Angular</p>
            <p>Django</p>
            <p>Git</p>
            <p>Docker</p>
            <p>TailwindCSS</p>
            <p>NextJS</p>
          </div>
          <div>
            <h4>Software</h4>
            <p>Figma</p>
          </div>
        </section>

        <h3>Education</h3>
        <section>
          <div>
            <p>National University of Singapore</p>
            <h4>Bachelor of Computing in Computer Science | August 2021 - May 2025</h4>
          </div>
        </section>

        <a
          className="nav-link mx-auto mb-6 mt-8 flex w-max flex-row items-center space-x-2"
          href="mailto:lesterong776@gmail.com"
        >
          <span className="text-center">Updated resume available on request</span>
        </a>
      </div>
    </Section>
  );
};

export default Resume;

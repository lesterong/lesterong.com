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
            <p>SQL</p>
            <p>Java</p>
            <p>Python</p>
          </div>
          <div>
            <h4>Frameworks and Libraries</h4>
            <p>ReactJS</p>
            <p>Angular</p>
            <p>Django</p>
            <p>Git</p>
            <p>Docker</p>
            <p>TailwindCSS</p>
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

        <h3>Work Experience</h3>
        <section className="resume__experience">
          <div>
            <p>Success IT Consultancy</p>
            <h4>Software Engineer Intern | Sep 2023 - Present</h4>
            <ul className="mt-2">
              <li>
                Worked with product managers and engineers to enhance Auto Hire Purchase System, a cloud-based web
                application utilised by over 20 companies in the automotive industry.
              </li>
              <li>
                Integrated features in the application with Angular and TypeScript for the front-end and C# for the
                back-end.
              </li>
            </ul>
          </div>
          <div>
            <p>Keysight Technologies</p>
            <h4>Software Engineer Intern | May 2023 - Aug 2023</h4>
            <ul className="mt-2">
              <li>
                Worked as part of the Product Security Team to implement new features in the Vulnerability Management
                Tool using Python and Django.
              </li>
              <li>Containerised the Vulnerability Management Tool using Docker.</li>
              <li>
                Improved developer documentation for the Vulnerability Management Tool to speed up the setup process.
              </li>
            </ul>
          </div>
          <div>
            <p>Dine Inn Pte Ltd</p>
            <h4>UI/UX Intern | March 2021 - July 2021</h4>
            <ul className="mt-2">
              <li>
                Led redesign of Dine Inn&apos;s e-commerce platform to improve user experience and increase conversion
                rates.
              </li>
              <li>Designed high-fidelity mock ups on Figma for Dine Inn Driver&apos;s platform.</li>
              <li>Collaborated closely with development team to ensure a smooth hand-off process.</li>
            </ul>
          </div>
        </section>

        <a
          className="nav-link mx-auto mb-6 mt-8 flex w-max flex-row items-center space-x-2"
          href="/files/Lester_Ong_CV.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <span className="text-center">View PDF Resume</span>
          <span className="down-arrow">&#x2913;</span>
        </a>
      </div>
    </Section>
  );
};

export default Resume;

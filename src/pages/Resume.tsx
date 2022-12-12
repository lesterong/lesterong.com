import Section from '../sections/Section';
import cv from '../files/Lester_Ong_CV.pdf';

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
            <p>Java</p>
          </div>
          <div>
            <h4>Frameworks and Libraries</h4>
            <p>ReactJS</p>
            <p>TailwindCSS</p>
            <p>Git</p>
          </div>
          <div>
            <h4>Software</h4>
            <p>Figma</p>
          </div>
        </section>

        <h3>Education</h3>
        <section>
          <div>
            <p>National University of Singapore, B.Comp</p>
            <h4>August 2021 - Present</h4>
          </div>
        </section>

        <h3>Work Experience</h3>
        <section>
          <div>
            <p>Dine Inn Pte Ltd</p>
            <h4>UI/UX Intern | March 2021 - July 2021</h4>
            <ul>
              <li>Redesigned the user interface of Dine Inn&apos;s platform using Figma</li>
              <li>Designed a brand new platform for Dine Inn drivers</li>
            </ul>
          </div>
        </section>

        <a className="nav-link mx-auto mb-6 mt-8 flex w-max flex-row items-center space-x-2" href={cv} download>
          <span className="text-center">Download PDF Resume</span>
          <span className="down-arrow">&#x2913;</span>
        </a>
      </div>
    </Section>
  );
};

export default Resume;

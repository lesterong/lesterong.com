import Section from '../sections/Section';
import Bgcolors from '../types/Bgcolors';

const Resume = () => (
  <Section color={Bgcolors.Beige}>
    <h1 className="mt-16 text-center">Resume</h1>
    <h2 className="mt-6"> Lester Ong </h2>
    <p className="mb-10">A software engineer with a passion in design and animation.</p>

    <h3>Skills</h3>
    <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
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
    <section className="mb-8">
      <div>
        <p>National University of Singapore, B.Comp</p>
        <h4>August 2019 - Present</h4>
      </div>
    </section>

    <h3>Work Experience</h3>
    <section className="mb-8">
      <div>
        <p>Dine Inn Pte Ltd</p>
        <h4>UI/UX Intern | March 2021 - July 2021</h4>
        <ul>
          <li>Redesigned the user interface of Dine Inn&apos;s platform using Figma</li>
          <li>Designed a brand new platform for Dine Inn drivers</li>
        </ul>
      </div>
    </section>

    <a
      className="nav-link mx-auto mb-6 mt-8 flex w-max flex-row items-center space-x-2 text-indigo-200 transition duration-300 hover:text-indigo-300"
      href="../files/Lester_Ong_CV"
      download
    >
      <span className="text-center">Download PDF Resume</span>
      <span className="down-arrow inline-block">&#x2913;</span>
    </a>
  </Section>
);

export default Resume;

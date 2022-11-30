import { ProjectCardProps } from '../types/ProjectCard';

const ProjectCard = ({ title, duty, description }: ProjectCardProps) => {
  return (
    <div className="my-6 grid min-h-[318px] grid-rows-2 gap-6 rounded-lg bg-white p-4 shadow-sm md:grid-cols-2 md:grid-rows-1 md:p-6">
      <div className="order-last flex flex-col justify-between md:-order-last">
        <div>
          <h3>{title}</h3>
          <h4 className="mb-4">{duty}</h4>
          {description.map((d) => (
            <p key={d} className="mt-2">
              {d}
            </p>
          ))}
        </div>
        <a className="mt-6" href="/">
          View Project
        </a>
      </div>
      <div className="w-full bg-beige-100">IMAGE</div>
    </div>
  );
};

export default ProjectCard;

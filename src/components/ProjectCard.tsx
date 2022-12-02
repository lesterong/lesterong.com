import useImage from '../hooks/useImage';
import { ProjectProps } from '../types/Project';
import errorImage from '../assets/images/error.png';
import Loading from '../assets/Loading';

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  const { title, position, description, note, imageSource, links } = project;
  const { loading, error, image } = useImage(imageSource);
  return (
    <div className="my-6 grid min-h-[318px] grid-rows-2 gap-6 rounded-lg bg-white p-4 shadow-sm md:grid-cols-2 md:grid-rows-1 md:p-6">
      <div className="order-last flex flex-col justify-between space-y-6 md:-order-last md:space-y-0">
        <div>
          <h3>{title}</h3>
          <h4 className="mb-4">{position}</h4>
          {description.split('.').map(
            (d) =>
              d && (
                <p key={d} className="mt-2">
                  {d}.
                </p>
              )
          )}
        </div>
        <div>
          <div className="flex flex-row space-x-4 empty:hidden">
            {Object.entries(links).map((l) => {
              const [label, link] = l;
              return (
                <a key={link} href={link} target="blank" className="nav-link text-base">
                  {label} <span className="right-arrow inline-block">&#x2192;</span>
                </a>
              );
            })}
          </div>
          {note && <div className="mt-2 text-sm text-gray-100">*{note}</div>}
        </div>
      </div>
      <div className="relative flex max-h-[288px] w-full flex-col items-center justify-center bg-beige-100 p-6">
        {loading && (
          <>
            <Loading />
            <span className="mt-2">Loading image</span>
          </>
        )}
        {image && <img className="mx-auto max-h-full" src={image} alt={title} />}
        {error && <img className="mx-auto max-h-full" src={errorImage} alt="Error loading" />}
      </div>
    </div>
  );
};

export default ProjectCard;

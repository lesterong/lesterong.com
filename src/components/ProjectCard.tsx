import useImage from '../hooks/useImage';
import { ProjectProps } from '../types/Project';
import errorImage from '../assets/images/error.png';
import Loading from '../assets/Loading';
import BgColor from '../utils/BgColor';

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  const { title, position, description, note, imageSource, links } = project;
  const { loading, error, image } = useImage(imageSource);
  return (
    <div
      className={`my-6 flex min-h-[318px] flex-col gap-4 rounded-lg ${BgColor.Card} p-4 shadow-sm first-of-type:mt-4 md:grid md:grid-cols-2 md:p-6`}
    >
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
          {note && <div className="mt-2 text-sm text-gray-400">*{note}</div>}
        </div>
      </div>
      <div className={`relative flex h-[288px] w-full flex-col items-center justify-center ${BgColor.Base} p-6`}>
        {loading && (
          <>
            <Loading />
            <span className="mt-2">Loading image</span>
          </>
        )}
        {image && <img className="h-auto max-h-full w-auto" src={image} alt={title} />}
        {error && <img className="h-auto max-h-full w-auto" src={errorImage} alt="Error loading" />}
      </div>
    </div>
  );
};

export default ProjectCard;

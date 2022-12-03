import useImage from '../hooks/useImage';
import { ProjectProps } from '../types/Project';
import errorImage from '../assets/images/error.png';
import Loading from '../assets/Loading';

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  const { title, position, description, note, imageSource, links } = project;
  const { loading, error, image } = useImage(imageSource);
  return (
    <div className="card">
      <div className="card__content">
        <div className="card__content__main">
          <h3>{title}</h3>
          <h4>{position}</h4>
          {description.split('.').map((d) => d && <p key={d}>{d}.</p>)}
        </div>
        <div className="card__content__footer">
          <div>
            {Object.entries(links).map((l) => {
              const [label, link] = l;
              return (
                <a key={link} href={link} target="blank" className="nav-link text-base">
                  {label} <span className="right-arrow">&#x2192;</span>
                </a>
              );
            })}
          </div>
          {note && <aside>*{note}</aside>}
        </div>
      </div>
      <div className="card__image">
        {loading && (
          <>
            <Loading />
            <span>Loading image</span>
          </>
        )}
        {image && <img src={image} alt={title} />}
        {error && <img src={errorImage} alt="Error loading" />}
      </div>
    </div>
  );
};

export default ProjectCard;

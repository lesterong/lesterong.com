import useImage from '../hooks/useImage';
import { ProjectProps } from '../types/Project';
import errorPng from '../assets/images/error.png';
import errorWebp from '../assets/images/error.webp';
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
            {links &&
              Object.entries(links).map((l) => {
                const [label, link] = l;
                return (
                  <a key={link} href={link} target="_blank" className="nav-link text-base" rel="noopener noreferrer">
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
        {image.png && image.webp && (
          <picture>
            <source type="image/webp" srcSet={image.webp} />
            <source type="image/png" srcSet={image.png} />
            <img src={image.png} alt={title} />
          </picture>
        )}
        {error && (
          <picture>
            <source type="image/webp" srcSet={errorWebp} />
            <source type="image/png" srcSet={errorPng} />
            <img src={errorPng} alt={title} />
          </picture>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

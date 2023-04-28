import { FunctionComponent } from "react";
import "./ProjectCard.scss";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  card: {
    img: string;
    pp: string;
    cat: string;
    username: string;
  };
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({ card }) => {
  console.log(card.img);
  return (
    <Link to="" className="link">
      <div className="projectCard">
        <img src={card.img} alt="" />
        <div className="info">
          <img src={card.pp} alt="" />
          <div className="texts">
            <h2>{card.cat}</h2>
            <span>{card.username}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;

import { FunctionComponent } from "react";
import "./GigCard.scss";
import { Link } from "react-router-dom";

interface GigCardProps {
  item: {
    id: number;
    img: string;
    pp: string;
    desc: string;
    price: number;
    star: number;
    username: string;
  };
}

const GigCard: FunctionComponent<GigCardProps> = ({ item }) => {
  return (
    <Link to="/gigs/123" className="link">
      <div className="gigCard">
        <img src={item.img} alt="" />
        <div className="info">
          <div className="user">
            <img src={item.pp} alt="" />
            <span>{item.username}</span>
          </div>

          <p>{item.desc}</p>
          <div className="star">
            <img src="./images/star.png" alt="" />
            <span>{item.star}</span>
          </div>
          <hr />
          <div className="details">
            <img src="./images/heart.png" alt="" />
            <span>STARTING AT</span>
            <h2>${item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;

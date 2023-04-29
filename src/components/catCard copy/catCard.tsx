import React from "react";
import "./catCard.scss";
import { Link } from "react-router-dom";

interface catCardProps {
  item: {
    img: string;
    desc: string;
    title: string;
  };
}

const catCard: React.FunctionComponent<catCardProps> = ({ item }) => {
  return (
    <Link to="/gigs?cat=design">
      <div className="catCard">
        <img src={item.img} alt="" />
        <span className="desc">{item.desc}</span>
        <span className="title">{item.title}</span>
      </div>
    </Link>
  );
};

export default catCard;

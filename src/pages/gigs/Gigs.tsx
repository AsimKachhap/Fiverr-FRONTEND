import { FunctionComponent, useState } from "react";
import "./Gigs.scss";
import GigCard from "../../components/gigCard/GigCard";
import { gigs } from "../../data";

interface GigsProps {}

const Gigs: FunctionComponent<GigsProps> = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");

  const reSort = (type: string): void => {
    setSort(type);
    setOpen(false);
  };
  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">{"FIVERR > GRAPHICS & DESIGNS"}</span>
        <h1>AI Artists</h1>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <div className="sortBy">SortBy</div>
            <div className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </div>
            <img
              src="./images/down.png"
              alt=""
              onClick={() => setOpen(!open)}
            />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;

import { FunctionComponent } from "react";
import "./Featured.scss";

interface FeaturedProps {}

const Featured: FunctionComponent<FeaturedProps> = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find perfect <i>freelance</i> services for your business.
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./images/search.png" alt="" />
              <input type="text" placeholder="Try building mobile app" />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>Wordpress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src="./images/man.png" alt="man" />
        </div>
      </div>
    </div>
  );
};

export default Featured;

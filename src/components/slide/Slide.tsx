import { FunctionComponent } from "react";
import "./Slide.scss";
import Slider from "infinite-react-carousel";

interface SlideProps {
  children: React.ReactNode;
  slidesToShow: number;
  arrowsScroll: number;
}

const Slide: FunctionComponent<SlideProps> = ({
  children,
  slidesToShow,
  arrowsScroll,
}) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;

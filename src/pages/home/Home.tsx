import { FunctionComponent } from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <div>
      <Featured />
    </div>
  );
};

export default Home;

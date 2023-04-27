import { FunctionComponent } from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <div>
      <Featured />
      <TrustedBy />
    </div>
  );
};

export default Home;

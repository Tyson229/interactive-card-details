import BackCard from "./BackCard";
import FrontCard from "./FrontCard";
import "./style.scss";

const CardContainer = () => {
  return (
    <div className={`card-container`}>
      <FrontCard />
      <BackCard />
    </div>
  );
};

export default CardContainer;

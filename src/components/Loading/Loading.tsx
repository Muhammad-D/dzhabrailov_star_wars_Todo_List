import React from "react";
import "./Loading.scss";

import loadingSvg from "../../assets/animation/loading.svg";

const Loading: React.FC = () => {
  return (
    <div className="loading">
      <img src={loadingSvg} alt="Loading" />
    </div>
  );
};

export default Loading;

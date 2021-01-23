import React from "react";
import "./Loading.scss";

import loadingSvg from "../../assets/animation/loading.svg";

const Loading = () => {
  return (
    <div className="loading">
      <img src={loadingSvg} alt="Loading" />
    </div>
  );
};

export default Loading;

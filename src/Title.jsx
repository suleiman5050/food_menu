import React from "react";

const Title = ({ title }) => {
  return (
    <div>
      <div className="title">
        <h2>{title || "Default title"}</h2>
        <div className="title-underline"></div>
      </div>
    </div>
  );
};

export default Title;

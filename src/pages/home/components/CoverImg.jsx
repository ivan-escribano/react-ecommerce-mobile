import React from "react";
import img_cover from "../../../assets/img/cover-img.png";
const CoverImg = () => {
  return (
    <div className="cover__img">
      <img src={img_cover} alt="Iphone photo cover" className="w-75" />
    </div>
  );
};

export default CoverImg;

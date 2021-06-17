import React from "react";
import box from "../img/box.png";
import cola from "../img/cola.png";
import bumble from "../img/bumble.png";
import goPro from "../img/goPro.png";

function Banner() {
  return (
    <div>
      <h1>Dominican University of CA Resume Party</h1>
      <p>
        A Web App created by the Barowsky School of Business to ensure students
        get their resumes to potential employers.
      </p>
      <div className="companies">
        <img src={box} alt="" />
        <img src={cola} alt="" />
        <img src={bumble} alt="" />
        <img src={goPro} alt="" />
      </div>
    </div>
  );
}

export default Banner;

import React from "react";
import "./SuitcaseButton.scss";

const SuitcaseButton = ({ clickHandler }) => {
  return (
    <>
      <button className="suitcase-button" onClick={clickHandler}>
        <img
          src="https://res.cloudinary.com/gaseir526-tashiono/image/upload/v1595100865/BeTrippin%20Assets/icons8-suitcase-96_nwijdu.png"
          alt="suitcase"
          width="44px"
        />
      </button>
    </>
  );
};

export default SuitcaseButton;

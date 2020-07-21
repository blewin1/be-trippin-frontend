import React, { useState } from "react";
import PackingList from "../../sideWindows/PackingList/PackingList";
import SuitcaseButton from "../../sideWindows/PackingList/SuitcaseButton";
import CountdownTimer from "../../sideWindows/CountdownTimer/CountdownTimer";

import "./TripPage.scss";

const TripPage = () => {
  const [packingListOpen, setPackingListOpen] = useState(false);

  const handleSuitcaseButton = () => {
    setPackingListOpen(!packingListOpen);
  };

  let showPackingList = null;
  if (packingListOpen) {
    showPackingList = <PackingList />;
  }

  return (
    <div className="trip-page">
      <SuitcaseButton suitcaseClickHandler={handleSuitcaseButton} />
      {showPackingList}
      <span>Map</span>
      <span>Add </span>
      <CountdownTimer />
    </div>
  );
};

export default TripPage;

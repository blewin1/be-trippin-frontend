import React, { useState } from "react";
import PackingList from "../../sideWindows/PackingList/PackingList";
import SuitcaseButton from "../../sideWindows/PackingList/SuitcaseButton";

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
      <SuitcaseButton clickHandler={handleSuitcaseButton} />
      {showPackingList}

      <span>Map</span>
      <span>Add </span>
      <span>Countdown</span>
    </div>
  );
};

export default TripPage;

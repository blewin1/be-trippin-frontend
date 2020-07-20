import React, { useState } from "react";

import ListForm from "../../shared/ListForm/ListForm";
import "./PackingList.scss";

const PackingList = () => {
  const [listItems, setListItems] = useState([]);

  // Refactor for CRUD POST
  const handleSubmit = (item) => {
    console.log("handle submit", item);
    setListItems([...listItems, item]);
  };
  console.log("List of items", listItems);

  // Refactor for CRUD DELETE with Packlist Array API call
  const handleDelete = (deletedItem) => {
    console.log("handle delete", deletedItem);
    const updatedList = listItems.filter((item, index) => {
      return item !== deletedItem;
    });
    setListItems(updatedList);
  };

  let displayList = listItems.map((item, index) => (
    <li key={index}>
      {item}
      <button
        className="delete-button"
        onClick={() => {
          handleDelete(item);
        }}
      >
        x
      </button>
    </li>
  ));

  return (
    <div className="packing-list-border">
      <div className="packing-list">
        <p>Add your packing list items:</p>
        <ListForm handlePackListSubmit={handleSubmit} />
        <ol className="packing-list-items">{displayList}</ol>
      </div>
    </div>
  );
};

export default PackingList;

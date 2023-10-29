import React, { useState } from "react";
import "./ListItem.css";

const ListItem = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div onClick={toggleExpand} className="space-card">
        <span className="btn-dropdown">{item.name}</span>
        <span onClick={toggleExpand}> {isExpanded ? "-" : "+"}</span>
      </div>
      {isExpanded && <div>{item.content}</div>}
    </div>
  );
};

export default ListItem;

import React, { useState } from 'react';


const ListItem = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <div>
  
      <div onClick={toggleExpand} >
       <button className='btn-dropdown'>{item.name}</button> 
        <button onClick={toggleExpand}> {isExpanded ? '-' : '+'}</button>
      </div>
      {isExpanded && <div>{item.content}</div>}
   
    </div>
    
  );
}

export default ListItem;

import React from "react";
import ListItem from "../ListItem/ListItem";
import './List.css'

const List = (props) => {
  return (
    <div className="list_item-container">
      <div className="list">
        {props.addedComponents.map((component, index) => (
          <div key={index} className="list-item">
            {component}
          </div>
        ))}
        <button className="list-button" onClick={props.add}>Add</button>
      </div>
    </div>
  )
}
export default List;

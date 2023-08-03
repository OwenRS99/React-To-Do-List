import React from "react";
import List from "../List/List";
import './List_Item.css'

const List_Item = () => {
    return (
        <div className="list_item-container">
            <div className="list">
                <List />
                <List />
                <List />
            </div>
        </div>
    )
}

export default List_Item;
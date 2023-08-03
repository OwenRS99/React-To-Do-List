import React from "react";
import './ListItem.css'

const ListItem = (props) => {
    return (
        <div className="container">
                <ul>
                    <form>
                        <input type="checkbox" name="check-box"></input>
                        <input type="text" name="text" value={props.name}></input>
                    </form>
                </ul>
        </div>   
    )
}

export default ListItem;
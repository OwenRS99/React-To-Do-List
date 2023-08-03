import React from "react";
import './List.css'

const List = (props) => {
    return (
        <div className="container">
                <ul>
                    <form>
                        <input type="checkbox" name="check-box"></input>
                        <input type="text" name="text"></input>
                    </form>
                </ul>
        </div>   
    )
}

export default List;
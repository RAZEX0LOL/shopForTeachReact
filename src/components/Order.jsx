import React from "react";
import {GoTrash} from "react-icons/go";

export default function Order(props){
    return(
        <div className="item">
            <img src={"./images/" + props.item.img}/>
            <h2>{props.item.title}</h2>
            <b>{props.item.price}</b>
            <GoTrash className="delete-icon" onClick={()=> props.onDelete(props.item.id)}/>
        </div>
    );
}
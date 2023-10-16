import React, { useState } from "react";
import {GoTrash} from "react-icons/go";
import Order from "./Order";

export default function Header(props){
    let[cartOpen,setCartOpen]=useState(false);

    return(
        <header>
            <div>
                <span className="logo">Phone Center</span>
            
            <ul className="nav">
                <li>Про нас</li>
                <li>Контакты</li>
                <li>Кабинет</li>
                <li>Скачать прайс</li>
            </ul>
            <GoTrash onClick={()=>setCartOpen(cartOpen=!cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>

            {cartOpen && (
                <div className="shop-cart">
                    {props.orders.map(el => (
                        <Order key={el.id} item={el}/>
                    ))}
                </div>
            )}
            </div>
            <div className="presentation"></div>
        </header>
    );
}
import React, { useState } from "react";
import {GoTrash} from "react-icons/go"

export default function Header(){
    let[cartOpen,setCartOpen]=useState(false);

    return(
        <header>
            <div>
                <span className="logo">Phone Center</span>
            </div>
            <ul className="nav">
                <li>Про нас</li>
                <li>Контакты</li>
                <li>Кабинет</li>
                <li>Скачать прайс</li>
            </ul>
            <GoTrash onClick={()=>setCartOpen(cartOpen=!cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>
            <div className="presentation"></div>
        </header>
    );
}
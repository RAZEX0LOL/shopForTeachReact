import React, { useState } from "react";
import {GoTrash} from "react-icons/go";
import Order from "./Order";
import PriceListPDF from "./PriceListPDF";
import { saveAs } from "file-saver";
import { Document, Page, Text, View, StyleSheet, pdf } from "@react-pdf/renderer";



const showOrders=(props)=>{
    let summa=0;
    props.orders.forEach(el=>summa +=Number.parseFloat(el.price))
    return(
        <div>
            {props.orders.map(el => (
                <Order onDelete={props.onDelete} key={el.id} item={el}/>
            ))}
            <p className="summa">К оплате: {new Intl.NumberFormat().format(summa)} $</p>
        </div>
    );
}

const showNothing=()=>{
    return(
        <div className="empty">
            <h2>Товары в корзине отсутствуют</h2>            
        </div>
    );
}




export default function Header(props){

    const handleDownloadPDF = async () => {
        const pdfBlob = await pdf(<PriceListPDF items={props.items} />).toBlob();
        saveAs(pdfBlob, "price.pdf");
    };



    let[cartOpen,setCartOpen]=useState(false);

    return(
        <header>
            <div>
                <span className="logo">Phone Center</span>
            
            <ul className="nav">
                <li>Про нас</li>
                <li>Контакты</li>
                <li>Кабинет</li>
                <li onClick={handleDownloadPDF}>Скачать прайс</li>

            </ul>
            <GoTrash onClick={()=>setCartOpen(cartOpen=!cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>

            {cartOpen && (
                <div className="shop-cart">
                    {props.orders.length>0 ?
                        showOrders(props) : showNothing()    
                    }
                </div>
            )}
            </div>
            <div className="presentation"></div>
        </header>
    );
}
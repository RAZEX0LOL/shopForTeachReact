import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";
import axios from "axios";

export default function App() {
  const [orders, setOrders] = useState([]);
  const [currentItems,setCurrentItems]=useState([]);
  const [showFullItem,setShowFullItem]=useState(false);
  const [fullItem,setFullItem]=useState({});
  const [items,setItems] =useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/items")
      .then((response)=>{
        setItems(response.data);
        chooseCategory("all");
        setCurrentItems(response.data);
      })
      .catch((error)=>{
        console.error("Ошибка при загрузке данных", error);
      });
  }, []);
  
  const addToOrder = (item3) => { 
  
    if (!orders.some((el) => el.id === item3.id)) {
      setOrders([...orders, item3]);
    }
  };
  
  const deleteOrder = (id) => {
    setOrders(orders.filter((el) => el.id !== id));
  };

  const chooseCategory=(category)=>{
    if(category==="all"){
      setCurrentItems(items);
    }
    else{
      setCurrentItems(items.filter((el) => el.category === category));
    }
  }

  const onShowItem = (item)=>{
    setFullItem(item);
    setShowFullItem(!showFullItem);
  }

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrder}/>
      <Categories chooseCategory={chooseCategory}/>
      <Items allItems={currentItems} onShowItem={onShowItem} onAdd={addToOrder}/>
      {showFullItem && <ShowFullItem onShowItem={onShowItem} onAdd={addToOrder} item={fullItem}/>}
      <Footer/>
    </div>
  );

  
}



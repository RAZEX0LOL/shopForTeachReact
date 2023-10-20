import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

export default function App() {
  const [orders, setOrders] = useState([]);
  const [currentItems,setCurrentItems]=useState([]);
  const [showFullItem,setShowFullItem]=useState(false);
  const [items,setItems] =useState([
    {
      id:1,
      title:'iPhone 15 Pro Max',
      img:'iPhone15ProMax.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      category: 'Apple',
      price: '1249.99'
    },
    {
      id:2,
      title:'iPhone 14 Pro Max',
      img:'iPhone14ProMax.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      category: 'Apple',
      price: '1149.99'
    },
    {
      id:3,
      title:'Samsung S23 Ultra',
      img:'SamsungS23Ultra.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      category: 'Samsung',
      price: '871.99'
    },
    {
      id:4,
      title:'Samsung Z Fold 5',
      img:'SamsungZFold5.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      category: 'Samsung',
      price: '1799.99'
    },
    {
      id:5,
      title:'Nothing Phone 1',
      img:'NothingPhone1.jpeg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      category: 'Nothing',
      price: '419.99'
    },
    {
      id:6,
      title:'Nothing Phone 2',
      img:'NothingPhone2.png',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      category: 'Nothing',
      price: '599.99'
    },
    {
      id:7,
      title:'Huawei P60 Pro',
      img:'HuaweiP60Pro.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      category: 'Huawei',
      price: '963.99'
    },
    {
      id:8,
      title:'Huawei Mate X3',
      img:'HuaweiMateX3.png',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      category: 'Huawei',
      price: '2099.99'
    },
    {
      id:9,
      title:'iPhone 15 Plus',
      img:'iPhone15Plus.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      category: 'Apple',
      price: '799.99'
    },
    {
      id:10,
      title:'Samsung Z Flip 5',
      img:'SamsungZFlip5.jpeg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      category: 'Samsung',
      price: '1119.99'
    }
  ])

  useEffect(() => {
    setCurrentItems(items);
  }, [items]);
  
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
    setShowFullItem(!showFullItem);
  }

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrder}/>
      <Categories chooseCategory={chooseCategory}/>
      <Items allItems={currentItems} onShowItem={onShowItem} onAdd={addToOrder}/>
      {showFullItem && <ShowFullItem/>}
      <Footer/>
    </div>
  );

  
}



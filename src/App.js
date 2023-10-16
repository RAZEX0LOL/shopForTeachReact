import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import Items from "./components/Items";

export default function App() {
  const [orders, setOrders] = useState([]);
  const [items,setItems] =useState([
    {
      id:1,
      title:'iPhone 15 Pro Max',
      img:'iPhone15ProMax.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      category: 'Apple',
      price: '1250'
    },
    {
      id:2,
      title:'iPhone 14 Pro Max',
      img:'iPhone14ProMax.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      category: 'Apple',
      price: '1150'
    },
    {
      id:3,
      title:'Samsung S23 Ultra',
      img:'SamsungS23Ultra.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      category: 'Samsung',
      price: '872'
    },
    {
      id:4,
      title:'Samsung Z Fold 5',
      img:'SamsungZFold5.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      category: 'Samsung',
      price: '1799'
    },
    {
      id:5,
      title:'Nothing Phone 1',
      img:'NothingPhone1.jpeg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      category: 'Nothing',
      price: '419'
    },
    {
      id:6,
      title:'Nothing Phone 2',
      img:'NothingPhone2.png',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      category: 'Nothing',
      price: '599'
    },
    {
      id:7,
      title:'Huawei P60 Pro',
      img:'HuaweiP60Pro.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      category: 'Huawei',
      price: '964'
    },
    {
      id:8,
      title:'Huawei Mate X3',
      img:'HuaweiMateX3.png',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      category: 'Huawei',
      price: '2099'
    },
    {
      id:9,
      title:'iPhone 15 Plus',
      img:'iPhone15Plus.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      category: 'Apple',
      price: '799'
    },
    {
      id:10,
      title:'Samsung Z Flip 5',
      img:'SamsungZFlip5.jpeg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      category: 'Samsung',
      price: '1120'
    }
  ])
  
  const addToOrder = (item3) => { 
    if (!orders.some((el) => el.id === item3.id)) {
      setOrders([...orders, item3]);
    }
  };

  return (
    <div className="wrapper">
      <Header orders={orders}/>
      <Items allItems={items} onAdd={addToOrder}/>
      <Footer/>
    </div>
  );

  
}



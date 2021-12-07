import React,{useState} from 'react'
import "./style.css"
import Menucard from './Menucard';
import Menu from './Menuapi';
import Navbar from './Navbar';

const uniqueList= [...new Set(Menu.map((curElem)=>{
  return curElem.category;
})),"all"];
console.log(uniqueList);
const Restaurant = () => {
  const [menuList, setMenuList] = useState(uniqueList)
  const [menuData, setMenuData] = useState(Menu);
  const filter=(category)=>{
    if (category==="all")
    {
      setMenuData(Menu);
      return;
    }
    const updatedList= Menu.filter((curElem)=>{
      return curElem.category===category;
    });
    
    setMenuData(updatedList);

  }
  
    return (
        <>
        <Navbar filter={filter} menuList={menuList}/>
        <Menucard menuData={menuData}/>
      </>
    )
}

export default Restaurant

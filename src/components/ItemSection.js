
import { useState } from "react";
import MenuList from "./MenuList";
import Category from "./Category";

const ItemSection = ({menuItems}) =>{

 const [showIndex,setShowIndex] = useState(null);
  
    return <div className="">
        {menuItems.map((item,index) =>(
        <div  key={index} className=" bg-orange-500 border-b border-gray-500 " >
       <Category items={item} showItems={index===showIndex ? true : false} setShowIndex = {() => setShowIndex(index)}/>
         </div>
       ))}
    </div>;
}
export default ItemSection;
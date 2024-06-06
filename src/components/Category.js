import { useState } from "react";
import MenuList from "./MenuList"

const Category = ({items,showItems,setShowIndex}) =>{
    // const[showItems,setShowItems] = useState(false);

    const clicked = () =>{
    setShowIndex();
    }
    return (<div>
         <div className=" flex justify-around m-auto p-4  text-center cursor-pointer" onClick={clicked}>
        <h1 className="font-bold text-white w-9/12 text-wrap">{items?.card?.card?.title} ({items.card.card.itemCards.length})</h1>
         <p className="w-3/12">⬇️</p>
        </div>
         <div className="">
           {/* {console.log(item.card.card.itemCards)} */}
          { showItems &&  <MenuList itemCard={items.card.card.itemCards}/>}
         </div>
    </div>)
}
export default Category;
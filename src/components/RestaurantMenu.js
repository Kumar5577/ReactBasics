import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL, RESTAURANT_MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import ItemSection from "./ItemSection";



const RestaurantMenu = () =>{
    const [menuCard,setMenuCard] = useState([]);
    const [hotel,setHotel] = useState([]);

    const {resId} = useParams();
    useEffect(() => {
        loadMenuCard();
    },[]);

    const loadMenuCard = async () =>{
     
        const data = await fetch(RESTAURANT_MENU_URL+resId);
        const json = await data.json();
        setHotel(json?.data.cards[2].card.card.info);
        const menuCards = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        // console.log(menuCards);
      
        const filteredCards =  menuCards.filter( (cards)=>{
          // console.log(menuCards);
          const cardType = cards?.card?.card?.["@type"]
          // console.log(cardType);
          return cardType==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
        });
        setMenuCard(filteredCards);
        // console.log(menuItem);
        // console.log(filteredCards);
       
        
    };
    
    if(menuCard ===null) return <Shimmer/>
    return (
         <div className="w-12/12 bg-orange-300">
            {/**Header */}
            
              <h1 className="m-4 font-bold text-center">Restaurant Name: {hotel?.name}</h1>
              <img className="w-[200px] ml-[660px]" src={CDN_URL+hotel.cloudinaryImageId}/>
              <h2  className="m-4 font-bold text-center"> Area : {hotel.areaName}</h2>
              
              <div>
               
                  <ItemSection menuItems={menuCard}/>
                
              </div>

            
           
            </div>
    );
}

export default RestaurantMenu;
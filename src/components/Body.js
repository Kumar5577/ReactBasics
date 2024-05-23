
import { resList } from "../utils/mockData";
import { ResCard } from "./ResCard";
import { useState } from "react";
const Body = () => {
    const [listOfRestaurants,setListOfRestaurants] = useState(resList);
    return (
      <div className="body">
        <div className="filter-btns">
        <button className="top-restaurants filtered-restaurants" onClick={() => {
            const res = listOfRestaurants.filter((rest) => rest.info.avgRating > 4.2);
         setListOfRestaurants(res);
        }}>Top Rated restaurants</button>
    <button className="fast-delivery filtered-restaurants" onClick={() => {
        const res = listOfRestaurants.filter((rest) => 
        rest.info.sla.deliveryTime < 30);
        setListOfRestaurants(res);
    }}>Fast Delivery Restaurants</button>
    <button className="budget-friendly filtered-restaurants" onClick={() => {
        const res = listOfRestaurants.filter((rest) => rest.info.costForTwo.slice(1,4) <= 250);
        setListOfRestaurants(res);
    }}>Budget Friendly Restaurants </button>
    <button className="refresh filtered-restaurants" onClick={()=>{
        setListOfRestaurants(resList);
    }
    }>Refresh</button>
        </div>
        <div className="res-components">
          {
                  listOfRestaurants.map((resData) =>(
                  <ResCard key ={resData.info.id} restaurant = {resData}/>))
          }
        </div>
      </div>
    );
  };

  export default Body;
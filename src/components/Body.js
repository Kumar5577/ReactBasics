
import { ResCard } from "./ResCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";

import { CARDS_URL } from "../utils/constants";
import { Link } from "react-router-dom";


const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(CARDS_URL);

    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setSearchList(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    // console.log(
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );
  };
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="m-2 p-2 bg-orange-100">
        <div className="m-4 p-4 flex justify-between align-middle">
            <input  className="m-4 p-4 border border-gray-400 rounded-xl bg-green-200" type="text" placeholder ="Search For Your Favourite Food Or Restaurant..." value={searchText}
            onChange={(e) => {
                setSearchText(e.target.value) 
            }}/>
            <button className="m-3 p-2 border border-green-600 rounded-2xl  bg-green-300 h-10 text-center " onClick={() =>{
                const filterRes = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()))
            setSearchList(filterRes);
            console.log(searchList);
            }}> Search</button>
      
        <button
          className="m-3 p-2 border border-green-600 rounded-2xl  bg-green-300 h-10 text-center "
          onClick={() => {
            const res = listOfRestaurants.filter(
              (rest) => rest.info.avgRating > 4.2
            );
            setSearchList(res);
          }}
        >
          Top Rated restaurants
        </button>
        <button
          className="m-3 p-2 border border-green-600 rounded-2xl  bg-green-300 h-10 text-center "
          onClick={() => {
            const res = listOfRestaurants.filter(
              (rest) => rest.info.sla.deliveryTime <= 30
            );
            setSearchList(res);
          }}
        >
          Fast Delivery Restaurants
        </button>
        <button
          className="m-3 p-2 border border-green-600 rounded-2xl  bg-green-300 h-10 text-center "
          onClick={() => {
            const res = listOfRestaurants.filter(
              (rest) => rest.info.costForTwo.slice(1, 4) <= 250
            );
            setSearchList(res);
          }}
        >
          Budget Friendly Restaurants{" "}
        </button>
        
      </div>
      <div className="m-3 p-3 flex flex-wrap 6/12">
        {searchList.map((resData,index) => (
          <Link to={"/restaurants/"+resData.info.id} key= {resData.info.id}><ResCard  restaurant={resData} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

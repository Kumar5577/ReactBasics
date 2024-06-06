import { CDN_URL } from "../utils/constants";

export const ResCard = (props) => {
    const {restaurant} = props;
    const {name,cuisines,avgRating,costForTwo} = restaurant?.info;
return (
<div className="">
  <div className="m-3 p-2 border border-gray-400 rounded-lg  bg-orange-500 w-[250px] h-[375px] underline">
    <div className="w-6/12 m-auto">
  <img  src={CDN_URL+restaurant.info.cloudinaryImageId} />
  </div>
  <div className=" my-3 p-1 font-bold">
  <h3 className=""> Name: {name}</h3>
  <h4>Cuisines: {cuisines.join(", ")}</h4>
  <h4>Rating: {avgRating} Stars</h4>
  <h4>Price: {costForTwo}</h4>
    <h4>Delivery In {restaurant.info.sla.deliveryTime} Minutes</h4>
    </div>
    </div>
</div>
);
};



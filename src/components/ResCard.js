import { CDN_URL } from "../utils/constants";

export const ResCard = (props) => {
    const {restaurant} = props;
    const {name,cuisines,avgRating,costForTwo} = restaurant?.info;
return (
<div className="res-card">
  <img className="res-logo" src={CDN_URL+restaurant.info.cloudinaryImageId} />
  <h3> Name: {name}</h3>
  <h4>Cuisines: {cuisines.join(", ")}</h4>
  <h4>Rating: {avgRating} Stars</h4>
  <h4>Price: {costForTwo}</h4>
    <h4>Delivery In {restaurant.info.sla.deliveryTime} Minutes</h4>
</div>
);
};



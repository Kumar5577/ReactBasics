import { CDN_URL, DEFAULT_FOOD_IMG_URL } from "../utils/constants";

const MenuList = ({itemCard})=>{
    return(
        <div className="w-[500px] align-middle mx-auto my-5"> {itemCard.map((card,index) =>(
            <div key={index} className="flex  mx-auto border border-gray-200 my-5  bg-black text-white">
            <div className="m-4 p-4  w-9/12 text-left">
            <h3 className="m-auto p-4 font-bold" >Item Name :{card?.card?.info?.name}</h3>
            <h3 className="m-auto p-4 font-bold">Price : {card?.card?.info.price ? card?.card?.info.price :card?.card?.info?.finalPrice}</h3>  
            <p>{card?.card?.info.description}</p>
            </div> 
            <div className= "items-end w-3/12 my-20">
                {/* ({console.log(card?.card?.info)}) */}
                <img  src={(card?.card?.info?.imageId ? CDN_URL+card?.card?.info?.imageId : DEFAULT_FOOD_IMG_URL)}/>
                <button className="absolute border border-gray-200 rounded-lg">Add +</button>
                </div>        
            </div>   
        ))}
            
        </div>
    )
}
export default MenuList; 
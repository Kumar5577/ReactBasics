import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";


const Header = () => {
    return (
      
      <div className="h-20 m-2 p-2 bg-green-100 border border-gray-400 shadow-lg rounded-lg flex justify-between ">
       
          <img className="h-17" src={LOGO_URL}/>
        
        <div className="">
          <ul className="flex justify-between">
            <li className="m-2 px-2"><Link to={"/home"}>Home</Link></li>
            <li className="m-2 px-2"><Link to={"/about"}>About Us</Link></li>
            <li className="m-2 px-2"><Link to={"/contact"}>Contact</Link></li>
            <li className="m-2 px-2"><Link to={"/cart"}>Cart</Link></li>
            <button className="login">Login</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;
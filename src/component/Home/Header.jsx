import { Link } from "react-router-dom";
import Banner from "./Header/Banner";

// import 'src/assets/Logo.png'
const Header = () => {
    return (
      <div>
          <div className="container mx-auto my-5 items-center flex navbar bg-base-100">
   <div className="flex-1" >
     <img src='src/assets/Logo.png' alt="" />
   </div>
   <div className="flex-none">
     <ul className="menu menu-horizontal px-1 font-bold">
            <li><Link to='/'>Home</Link></li>
             <li><Link to='/donation'>Donation</Link></li>
             <li><Link to='/statistics'>Statistics</Link></li>
           
     </ul>
   </div>
 </div>
 <Banner></Banner>
      </div>
      
 

    );
};

export default Header;
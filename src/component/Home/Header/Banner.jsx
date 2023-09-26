import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="flex items-center justify-center" >
             <div className="space-y-5">
             <h2 className="text-3xl font-bold">I Grow By Helping People In Need</h2>
             
             <input type="text" placeholder="search here" className="w-[400px] px-4 py-3 rounded-lg text-2xl font-bold border" />
           <Link className="btn px-6 rounded-xl -ml-3 py-7 text-center bg-[#FF444A] text-white"><button className="">Search</button></Link>
             </div>
            
      </div>
         
       
    );
};

export default Banner;
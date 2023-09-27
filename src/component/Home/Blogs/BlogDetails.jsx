import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { storedDonation } from "../../../localStorage";



const BlogDetails = () => {
    const data=useLoaderData();
    const {id}=useParams();
    const idInt=parseInt(id);
    const blog=data.find(blog =>blog.id===idInt);


    const handleClick=()=>{
       storedDonation(idInt);
      
       
       toast('your donation is successfull');
    }
   
    return (
        <div className="max-w-4xl mx-auto my-10">
          <Link to='/'>  <button className=" btn my-2">go back to home</button></Link>
            <div className="hero  w-full"><img className="w-full h-[400px]" src={blog.picture} alt="" />
            <div className="hero-overlay bg-opacity-40 h-[110px]  mt-72"></div>
          </div>
           <div className="text-start -mt-16 ml-4"> <Link><button onClick={()=>handleClick(id)} className="btn border-0 text-white" style={{backgroundColor: blog.category_bg }}>Donate ${blog.price}</button>
           </Link>
           <ToastContainer /></div>
            <div className="text-justify mt-6">
                <h2 className="text-2xl font-bold">{blog.title}</h2>
                < p className="font-medium">{blog.description}</p>
            </div>
            
        </div>
    );
};

export default BlogDetails;
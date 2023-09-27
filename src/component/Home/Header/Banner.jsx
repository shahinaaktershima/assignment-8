import { useEffect, useState } from "react";
import NewBlog from "./NewBlog";
import Blog from "../Blogs/Blog";



const Banner = () => {
  const[blogs,setBlogs]=useState([]);
  const[specificBlog,setSpecificBlog]=useState([])
 
 useEffect(()=>{
      fetch('/fakeData.json')
      .then(res=>res.json())
      .then(data=>setBlogs(data))
  },[])
  const handleClick=e=>{
    e.preventDefault();
    const value=e.target.name.value;
    // console.log(e.target.name.value);
    // const blog=blogs.find(blog=>value===category);
    // if(value==='all'){
    //   setSpecificBlog(blogs)
    // }
    if(value==="education"){
      const Education=blogs.filter(blog=>blog.category==="Education");
      setSpecificBlog(Education)
    }
    
    if(value==="clothing"){
      const clothing=blogs.filter(blog=>blog.category==="Clothing");
      setSpecificBlog(clothing);
    }
    if(value==="food"){
      const Food=blogs.filter(blog=>blog.category==="Food");
      setSpecificBlog(Food);
    }
    if(value==="health"){
      const Health=blogs.filter(blog=>blog.category==="Health");
      setSpecificBlog(Health);
    }

  }

        
    return (
        
    <div>  <div className="hero max-h-[600px]" style={{backgroundImage: 'url(https://i.ibb.co/DKH5bCV/smiley-female-volunteer-friends-holding-food-donations.jpg)'}}>
    <div className="hero-overlay bg-opacity-30"></div>
    <div className="hero-content text-center text-neutral-content py-40">
    <div className="space-y-5">
           <h2 className="text-3xl font-bold text-white">I Grow By Helping People In Need</h2>
           
          <form onSubmit={handleClick} action="">
            <input type="text" name="name" placeholder="search here" className="w-[400px] px-4 py-3 rounded-xl text-2xl font-bold border text-black" />
         <input className="btn px-6 rounded-xl -ml-3 py-7 text-center bg-[#FF444A] text-white border-0" type="submit" value="Search" /></form>
           
           </div>
           
    </div>
   
  </div>
      <div className="grid grid-cols-3 mt-6 gap-10 container mx-auto">{
        specificBlog.map((blog,idx)=><Blog key={idx} blog={blog}></Blog>)
        }
      </div></div>
    );
};

export default Banner;
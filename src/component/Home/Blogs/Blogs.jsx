import { useEffect, useState } from "react";
import Blog from "./Blog";


const Blogs = () => {
    const[blogs,setBlogs]=useState([]);
    useEffect(()=>{
        fetch('/fakeData.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="container mx-auto  my-20">
            
           <div className="grid md:grid-cols-3 lg:grid-cols-4 md:gap-5"> {
                blogs.map(blog=><Blog key={blog.id} blog={blog}></Blog>)
            }</div>
        </div>
    );
};

export default Blogs;
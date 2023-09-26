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
        <div className="container mx-auto  my-40">
            
           <div className="grid grid-cols-4 gap-5"> {
                blogs.map(blog=><Blog key={blog.id} blog={blog}></Blog>)
            }</div>
        </div>
    );
};

export default Blogs;
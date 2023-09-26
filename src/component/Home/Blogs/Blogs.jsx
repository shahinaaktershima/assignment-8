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
            <h2 className="text-3xl font-bold">number of blogs:{blogs.length}</h2>
           <div className="grid grid-cols-4 gap-5"> {
                blogs.map(blog=><Blog key={blog.id} blog={blog}></Blog>)
            }</div>
        </div>
    );
};

export default Blogs;
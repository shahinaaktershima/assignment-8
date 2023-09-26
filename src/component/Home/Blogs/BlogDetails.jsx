import { Link, useLoaderData, useParams } from "react-router-dom";


const BlogDetails = () => {
    const data=useLoaderData();
    const {id}=useParams();
    const idInt=parseInt(id);
    const blog=data.find(blog =>blog.id===idInt);
    console.log(data,id);
    return (
        <div className="max-w-4xl mx-auto">
          <Link to='/'>  <button className="image-container btn my-2">go back to home</button></Link>
            <div className="w-full "><img className="w-full h-[400px]" src={blog.picture} alt="" />
          </div>
           <div className="text-start -mt-16 ml-4"> <Link><button className="btn border-0 text-white" style={{backgroundColor: blog.category_bg }}>Donate ${blog.price}</button></Link></div>
            <div className="text-justify mt-6">
                <h2 className="text-2xl font-bold">{blog.title}</h2>
                < p className="font-medium">{blog.description}</p>
            </div>
        </div>
    );
};

export default BlogDetails;
import { Link } from "react-router-dom";

const NewBlog = ({blog}) => {
    const{id,picture,category,title,card_bg,category_bg}=blog;
    return (
        <div>
            < Link to={`/card/${id}`}>  <div className="rounded-lg h-[380px] " style={{ backgroundColor: card_bg }}>
           <figure className=""><img className="w-full h-[250px]" src={picture} alt="Shoes" />
           <div className="overlay"></div>
           </figure>
            <div className="px-4 py-4 text-justify">
             <button className="btn"><h2 style={{color: category_bg }}>{category}</h2></button>
             <p className=" font-bold" style={{color: category_bg }}>{title}</p>
            
           </div>
         </div></Link>
        </div>
    );
};

export default NewBlog;
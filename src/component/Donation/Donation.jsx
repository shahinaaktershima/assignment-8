import { Link } from "react-router-dom";


const Donation = ({donate}) => {
    const{id,picture,title,category,price,card_bg,category_bg}=donate;
    return (
        <div>
           <div className="card card-side h-[300px] gap-5"  style={{ backgroundColor: card_bg }} >
  <figure className="w-[350px]" ><img className="h-full w-full" src={picture} alt="Movie"/></figure>
  <div className="text-start  text-xl my-14 space-y-2">
   <button className="btn" style={{color: category_bg }}>{category}</button>
    <p>{title}</p>
    <p style={{color: category_bg }}>${price}</p>
    <div className="justify-start">
      <Link to={`/card/${id}`}><button className="btn border-0 text-white" style={{backgroundColor: category_bg }}>View details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Donation;
import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="text-center my-40 font-bold">
            <h2>OOPS!!!!!!!!!!!!!!there is nothing to show</h2>
          <button className="btn "> <Link to='/'>Go back</Link></button>
        </div>
    );
};

export default Error;
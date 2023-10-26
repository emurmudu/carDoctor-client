import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    console.log('from service card', service)
    const { _id, title, price, img } = service;
    return (
        <div className="card bg-base-100 shadow-xl p-6">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body text-left">
                <h2 className="card-title text-3xl ">{title}</h2>
                <h2 className="card-title text-2xl font-bold text-orange-600">Price : ${price}</h2>
            </div>
            <div className=" text-center">
                {/* <Link to={`/checkout/${_id}`}> */}
                <Link to={`/book/${_id}`}>
                    <button className="btn btn-primary">Book Now</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;
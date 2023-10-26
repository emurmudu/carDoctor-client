
const ServiceCard = ({ service }) => {
    console.log('from service card', service)
    const { title, price, img } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body text-left">
                <h2 className="card-title text-3xl ">{title}</h2>
                <h2 className="card-title text-2xl font-bold text-orange-600">Price : ${price}</h2>
            </div>
        </div>
    );
};

export default ServiceCard;
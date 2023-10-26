import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);
    console.log('What is that :', services);

    useEffect(() => {
        // fetch('/services.json')
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className=" mt-4">
            <div className=" text-center space-y-4">
                <h1 className=" text-2xl font-bold text-orange-600">Service</h1>
                <h1 className="text-5xl">Our Services Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br />
                    words which don't look even slightly believable. </p>
            </div>
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;
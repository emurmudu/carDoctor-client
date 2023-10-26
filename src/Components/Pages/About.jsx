import person from '../../assets/images/about_us/person.jpg';
import parts from '../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className=' lg:w-1/2 relative'>
                    <img src={person} className=' w-3/4 rounded-lg shadow-xl' alt="" />
                    <img src={parts} className=' absolute right-5 top-1/2 border-8 border-white w-1/2 rounded-lg shadow-xl' alt="" />
                </div>
                <div className=' space-y-8 lg:w-1/2'>
                    <h1 className=' text-orange-600 text-2xl font-bold'>About us</h1>
                    <h1 className="text-5xl font-bold">We are qualified
                        & of experience
                        in this field</h1>
                    <div>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration in some
                            form, by injected humour, or randomised words which don't
                            look even slightly believable. </p>
                        <p>
                            the majority have suffered alteration in some form, by injected
                            humour, or randomised words which don't look even slightly
                            believable.
                        </p>
                    </div>
                    <button className="btn btn-warning">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;
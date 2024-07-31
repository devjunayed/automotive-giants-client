import './Banner.css';
import bannerImg from '../../assets/images/car-banner.png'
const Banner = () => {
    return (
        <>
            <div className='bg-gradient-to-r from-indigo-800 relative to-purple-800 '>

                {/* Hero section start */}

                <div className="hero pb-10">
                    <div className="hero-content flex-col  lg:flex-row-reverse">
                        <img src={bannerImg} className="md:max-w-md lg:max-w-lg" />
                        <div className='text-center md:text-left lg:pb-0 md:pb-32'>
                            <h1 className=" text-3xl  md:text-5xl font-bold text-white">Automotive Giants <br />Elevating Your Drive</h1>
                            <p className="py-6 text-white">Explore Luxury. Embrace Performance. Welcome to Automotive Giants.</p>
                            <button className="btn bg-violet-700 hover:bg-violet-800 border-none text-white">Explore Now</button>
                        </div>
                    </div>
                </div>

                {/* Hero section End */}

                <div className="custom-shape-divider-bottom-1697797602 hidden md:block">
                    <svg  data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="dark:fill-zinc-700 fill-white"></path>
                    </svg>
                </div>
            </div>

        </>


    );
};

export default Banner;
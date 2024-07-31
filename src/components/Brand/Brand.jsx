import { Link, useLoaderData, useParams } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { AiFillStar } from 'react-icons/ai';

const Brand = () => {
    const params = useParams();
    const data = useLoaderData();
    const settings = {
        infinite: true,
        autoplay: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <div className="md:mb-10 w-full overflow-hidden">
                <Slider {...settings}>
                    <div className="w-full ">
                        <div className=" w-full items-center min-h-[80vh] flex text-white p-20 bg-black flex-col lg:flex-row-reverse">
                            <img src="https://i.ibb.co/R0v13Wx/Tesla-Model-3.png" className="max-w-xs md:max-w-xl rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-3xl md:text-5xl font-bold"><span className="text-yellow-800">Special Deal</span> 10% off</h1>
                                <h3 className="py-6 text-2xl">Tesla Model 3</h3>
                                <p>The Tesla Model 3 is an all-electric sedan with impressive range, cutting-edge technology, and a minimalist interior. It&rsquo;s a leader in electric mobility.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className=" w-full items-center min-h-[80vh] flex text-white p-20 bg-black flex-col lg:flex-row-reverse">
                            <img src="https://i.ibb.co/1XvYB72/BMW-X1.png" className="max-w-xs md:max-w-xl rounded-lg shadow-2xl" />
                            <div className="">
                                <h1 className="text-3xl md:text-5xl font-bold"><span className="text-yellow-800">Special Deal</span> 10% off</h1>
                                <h3 className="py-6 text-2xl">BMW X1</h3>
                                <p>The BMW X1 is a subcompact luxury SUV with a well-designed interior, agile handling, and a comfortable ride. It&rsquo;s a stylish and practical choice.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full ">
                        <div className=" w-full items-center min-h-[80vh] flex text-white p-20 bg-black flex-col lg:flex-row-reverse">
                            <img src="https://i.ibb.co/nr566mj/Toyota-Corolla.png" className="max-w-xs md:max-w-xl rounded-lg shadow-2xl" />
                            <div className="w-full">
                                <h1 className="text-3xl md:text-5xl font-bold"><span className="text-yellow-800">Special Deal</span> 10% off</h1>
                                <h3 className="py-6 text-2xl">Toyota Corolla</h3>
                                <p>The Toyota Corolla is a compact sedan known for its affordability, fuel efficiency, and user-friendly features. It&rsquo;s a practical choice for budget-conscious buyers.</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>

            {/* title */}
            <div className="text-black dark:text-zinc-400">
                <h1 className="text-3xl md:text-5xl text-center my-4 md:my-10 font-bold"> <span className="text-purple-600">{params.id}</span> Products</h1>

                {
                    data.length === 0 &&
                    <h3 className="text-lg md:text-3xl dark:text-white text-red-900 text-center py-32">Oops! no car found for this brand...</h3>
                }

                <div className=" mx-10 grid gap-10 mb-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    {
                        data.map((car, index) =>
                            <div key={index} className="card pb-4 space-y-1 border shadow-xl">
                                <div className=" max-w-full h-1/3">

                                    <img src={car.imageUrl} alt="Shoes" className=" p-4 rounded-xl  " />
                                </div>

                                <div className="card-body h-2/3">
                                    <h2 className="card-title">{car.name}</h2>
                                    <p>Brand: {car.selectedBrand}</p>
                                    <p>Type: {car.selectedCarType}</p>
                                    <p>Price: ${car.price}</p>
                                    <p className="flex">
                                        {
                                            Array.from({ length: car.rating }).map((value, index) =>
                                                <AiFillStar key={index} className="text-yellow-400" />
                                            )
                                        }
                                    </p>
                                    <p>{car.description}</p>
                                    <div className="card-actions justify-center">
                                        <Link to={`update/${car._id}`}>
                                            <button className="btn hover:bg-indigo-700 bg-indigo-800 text-white">Update</button>
                                        </Link>
                                        <Link to={`${car._id}`}>
                                            <button className="btn hover:bg-indigo-700 bg-indigo-800 text-white">Details</button>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Brand;
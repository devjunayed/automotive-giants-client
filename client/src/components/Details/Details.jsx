import { useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const Details = () => {
    const { user, cart, setCart } = useContext(AuthContext);
    const userID = user.uid;
    const car = useLoaderData();
    const carDetails = {
        userId: userID,
        name: car.name,
        imageUrl: car.imageUrl,
        selectedBrand: car.selectedBrand,
        selectedCarType: car.selectedCarType,
        rating: car.rating,
        price: car.price,
        description: car.description
    };
    const addToCart = () => {
        fetch(`https://automotive-giants-szycu79ub-devjunayeds-projects.vercel.app/cart`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(carDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Added to cart',
                        showConfirmButton: true,
                        timer: 1500
                    })
                }
                setCart([carDetails, ...cart]);
            })
    }
    return (
        <div className="text-black dark:text-zinc-400">
            <div className="card lg:card-side px-5 md:px-10 py-5 md:py-20 shadow-xl">
                <figure className="md:w-1/2"><img src={car.imageUrl} alt="Album" /></figure>
                <div className="card-body w-full md:w-1/2">
                    <h2 className="card-title">{car.name}</h2>
                    <p><span className="font-bold">Brand:</span> {car.selectedBrand}</p>
                    <p><span className="font-bold">Type:</span> {car.selectedCarType}</p>
                    <p><span className="font-bold">Price:</span> ${car.price}</p>
                    <p className="flex items-center">
                        <span className="font-bold mr-4">Rating:</span>
                        {
                            Array.from({ length: car.rating }).map((data, index) =>


                                <AiFillStar key={index} className="text-yellow-400" />

                            )
                        }
                    </p>
                    <p><span className="font-bold">Details:</span> {car.description}</p>
                    <button onClick={addToCart} className="btn bg-indigo-800 hover:bg-indigo-900 text-white">Add to Cart</button>

                </div>
            </div>
        </div>
    );
};

export default Details;
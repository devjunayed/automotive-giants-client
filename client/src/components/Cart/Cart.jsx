import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { AiFillStar } from "react-icons/ai";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";


const Cart = () => {
    const { cart, setCart } = useContext(AuthContext);
    const data = useLoaderData();

    useEffect(()=>{
        setCart(data);
    }, [data, setCart]);
  
    


    const handleDelete = (id) => {

        console.log("delete button is fired", id);
        fetch(`https://automotive-giants-szycu79ub-devjunayeds-projects.vercel.app/delete/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Item removed from cart successfully',
                        showConfirmButton: true,
                        timer: 1500
                    })
                    const remainingCartItem = cart.filter((item) => item._id !== id);
                    setCart(remainingCartItem);
                }
            })
    }

    return (
        <div>
            <h1 className="text-black dark:text-zinc-400 text-2xl md:text-5xl text-center my-10"><span className="text-purple-600">Cart</span> items</h1>
            {
                cart.length === 0 &&
                <h1 className="text-xl md:text-3xl text-center text-red-400">no items in the cart</h1>
            }
            <div className="text-black dark:text-zinc-400 flex flex-row flex-wrap justify-center gap-4 my-10">
                {
                    cart.map((item) =>
                        <div key={item._id} className="card w-8/12 lg:w-3/12 space-y-1 border shadow-xl">
                            <div className="h-1/2">

                                <img src={item.imageUrl} alt="Shoes" className=" p-4 w-full rounded-xl  " />
                            </div>

                            <div className="card-body">
                                <h2 className="card-title">{item.name}</h2>
                                <p>Brand: {item.selectedBrand}</p>
                                <p>Type: {item.selectedCarType}</p>
                                <p>Price: ${item.price}</p>
                                <p className="flex">
                                    {
                                        Array.from({ length: item.rating }).map((value, index) =>
                                            <AiFillStar key={index} className="text-yellow-400" />
                                        )
                                    }
                                </p>
                                <p>{cart.description}</p>
                                <button onClick={() => handleDelete(item._id)} className="btn w-full hover:bg-red-700 bg-red-500 text-white">Delete from cart</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};



export default Cart;
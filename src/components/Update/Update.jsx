import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';
const Update = () => {

    const data = useLoaderData();

    const [selectedCarType, setSelectedCarType] = useState(data.selectedCarType);
    const [selectedBrand, setSelectedBrand] = useState(data.selectedBrand);
    const [rating, setRating] = useState(data.rating);

    const handleBrandChange = (e) => {
        setSelectedBrand(e.target.value);
    }
    const handleCarTypeChange = (e) => {
        setSelectedCarType(e.target.value);
    }
    const handleRatingChange = (e) => {
        setRating(e.target.value);
    }

    const handlSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const imageUrl = form.imageUrl.value;
        const name = form.name.value;
        const price = form.price.value;
        const description = form.description.value;

        const carObject = {
            imageUrl,
            name,
            selectedBrand,
            selectedCarType,
            price,
            description,
            rating
        }

        fetch(`https://automotive-giants-szycu79ub-devjunayeds-projects.vercel.app/update/${data._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(carObject)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Car Updated successfully',
                        showConfirmButton: true,
                        timer: 1500
                    })
                    form.reset();
                }
            })
    };


    return (
        <div>
            <h1 className="text-3xl md:text-5xl text-center my-4 md:my-10 text-black dark:text-zinc-400">Update <span className="text-purple-600">{data.name}</span></h1>
            <div className="hero mb-4">
                <div className="card  w-full max-w-md md:max-w-2xl lg:max-w-2xl shadow-2xl">
                    <form className="card-body" onSubmit={handlSubmit}>
                        {/* Image URL */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black dark:text-zinc-400">Image Url</span>
                            </label>
                            <input
                                className="input text-black dark:text-zinc-400 bg-white dark:bg-slate-800 input-bordered"
                                name="imageUrl"
                                type="text"
                                placeholder="Image URL"
                                defaultValue={data.imageUrl}
                                required
                            />
                        </div>
                        <div className="flex justify-center gap-4 ">
                            {/* Name */}
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text text-black dark:text-zinc-400">Name</span>
                                </label>
                                <input
                                    className="input text-black dark:text-zinc-400 bg-white dark:bg-slate-800 input-bordered w-full"
                                    name="name"
                                    type="text"
                                    placeholder="name"
                                    defaultValue={data.name}
                                    required
                                />
                            </div>
                            {/* Brand name */}
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text text-black dark:text-zinc-400">Brand Name</span>
                                </label>
                                <select
                                    className="input text-black dark:text-zinc-400 bg-white dark:bg-slate-800 input-bordered w-full"
                                    name="brandName"
                                    id=""
                                    onChange={handleBrandChange}
                                    value={selectedBrand}
                                >
                                    <option value="Tesla">Tesla</option>
                                    <option value="Mercedes">Mercedes</option>
                                    <option value="Ford">Ford</option>
                                    <option value="Honda">Honda</option>
                                    <option value="Toyota">Toyota</option>
                                    <option value="BMW">BMW</option>
                                </select>

                            </div>
                        </div>
                        <div className="flex justify-center gap-4 ">
                            {/* Type */}
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text text-black dark:text-zinc-400">Car Type</span>
                                </label>
                                <select
                                    className="input text-black dark:text-zinc-400 bg-white dark:bg-slate-800 input-bordered w-full"
                                    name="cartType"
                                    id=""
                                    onChange={handleCarTypeChange}
                                    value={selectedCarType}
                                >
                                    <option value="Suv">Suv</option>
                                    <option value="Truck">Truck</option>
                                    <option value="Minivan">Minivan</option>
                                    <option value="Sedan">Sedan</option>
                                    <option value="Sports Car">Sports Car</option>
                                    <option value="Electric">Electric</option>
                                    <option value="Hybrid">Hybrid</option>
                                    <option value="Compact Car">Compact Car</option>
                                    <option value="Subcompact Car">Subcompact Car</option>
                                    <option value="Electric Sedan">Electric Sedan</option>
                                    <option value="Electric Suv">Electric Suv</option>
                                    <option value="Electric Pickup Truck">Electric Pickup Truck</option>
                                    <option value="Electric Sports Car">Electric Sports Car</option>
                                </select>
                            </div>
                            {/* Price */}
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text text-black dark:text-zinc-400">Price</span>
                                </label>
                                <input
                                    className="input text-black dark:text-zinc-400 bg-white dark:bg-slate-800 input-bordered w-full"
                                    name="price"
                                    type="number"
                                    placeholder="price"
                                    defaultValue={data.price}
                                    required
                                />
                            </div>
                        </div>
                        {/* Description */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black dark:text-zinc-400">Description</span>
                            </label>
                            <textarea defaultValue={data.description} placeholder="Write description here...." className="text-black dark:text-zinc-400 bg-white dark:bg-slate-800 border resize-none p-4" name="description" id="" cols="20" rows="5"></textarea>
                        </div>
                        {/* Rating */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black dark:text-zinc-400">Give Rating</span>
                            </label>
                            <span className="flex w-full relative">
                                <div className="rating rating-lg mx-auto mt-4">
                                    <input type="radio" name="rating-9"  value="0" onChange={handleRatingChange} className="  rating-hidden" />
                                    <input type="radio" name="rating-9" value="1" onChange={handleRatingChange} className=" bg-black dark:bg-white mask mask-star-2" />
                                    <input type="radio" name="rating-9" value="2" onChange={handleRatingChange} className=" bg-black dark:bg-white mask mask-star-2" />
                                    <input type="radio" name="rating-9" value="3" onChange={handleRatingChange} className=" bg-black dark:bg-white mask mask-star-2" />
                                    <input type="radio" name="rating-9" value="4" onChange={handleRatingChange} className=" bg-black dark:bg-white mask mask-star-2" />
                                    <input type="radio" name="rating-9" value="5" onChange={handleRatingChange} className=" bg-black dark:bg-white mask mask-star-2" />
                                </div>
                            </span>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-gradient-to-l from-indigo-800 to-purple-800 text-white">
                                Update Car
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;

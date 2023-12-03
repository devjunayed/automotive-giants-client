import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

const OurBrands = () => {

    const [ourBrands, setOurBrands] = useState([]);


    useEffect(() => {
        fetch('brands.json')
            .then(res => res.json())
            .then(data => setOurBrands(data));
    }, []);

    return (
        <div>
            <h1 className="text-3xl text-black dark:text-zinc-400 md:text-5xl text-center my-4 md:my-10">Our <span className='text-purple-600'>Brands</span></h1>
            <div className="text-black dark:text-zinc-400 grid gap-10 mx-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    ourBrands.map((brand) =>
                        <Link key={brand.id} to={`/brand/${brand.brand}`} className="flex cursor-pointer dark:bg-zinc-600  flex-col justify-center rounded-2xl shadow-xl">
                            <img src={brand.imgUrl} alt={brand.brand} className="pt-10 w-1/2 mx-auto  flex-grow h-1/2 mb-4" />
                            <div className="flex flex-col  flex-grow">
                                <h2 className="text-3xl font-bold text-center mb-4 ">{brand.brand}</h2>
                            </div>

                        </Link>)
                }
            </div>
        </div>
    );
};

export default OurBrands;
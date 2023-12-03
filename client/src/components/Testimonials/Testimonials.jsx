import Slider from 'react-slick';
import { AiFillStar } from 'react-icons/ai';
const Testimonials = () => {
    const settingsOne = {
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: "linear"
    };
    const settingsTwo = {
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: "linear"
    };
    return (
        <div className='w-full overflow-x-hidden'>
            <h1 className="text-black dark:text-zinc-400 text-center my-4 md:my-10 text-3xl md:text-5xl">What our <span className="text-purple-600">client</span> Says</h1>

            <div className='text-black dark:text-zinc-400 my-4 lg:my-10 hidden md:block' >
                <Slider {...settingsOne}>
                    <div className='my-4'>
                        <div className="dark:bg-zinc-600 card mx-2 md:mx-6 shadow-lg">

                            <div className="card-body">
                                <div className='flex items-center gap-2'>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full  ring-offset-base-100 ring-offset-2">
                                            <img src="https://i.ibb.co/vVdQfYN/Toyota-RAV4.png" />
                                        </div>
                                    </div>
                                    <h2>John Doe</h2>
                                </div>
                                <div>
                                    <p>They have very nice car!</p>
                                    <div className='flex mt-4'>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='my-4'>
                        <div className="dark:bg-zinc-600 card mx-2 md:mx-6 shadow-lg">

                            <div className="card-body">
                                <div className='flex items-center gap-2'>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full  ring-offset-base-100 ring-offset-2">
                                            <img src="https://i.ibb.co/vVdQfYN/Toyota-RAV4.png" />
                                        </div>
                                    </div>
                                    <h2>Rita</h2>
                                </div>
                                <div>
                                    <p>I love their customer services!</p>
                                    <div className='flex mt-4'>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='my-4'>
                        <div className="dark:bg-zinc-600 card mx-2 md:mx-6 shadow-lg">

                            <div className="card-body">
                                <div className='flex items-center gap-2'>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full  ring-offset-base-100 ring-offset-2">
                                            <img src="https://i.ibb.co/vVdQfYN/Toyota-RAV4.png" />
                                        </div>
                                    </div>
                                    <h2>Mr. Milar</h2>
                                </div>
                                <div>
                                    <p>collection is awesome.!</p>
                                    <div className='flex mt-4'>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='my-4'>
                        <div className="dark:bg-zinc-600 card mx-2 md:mx-6 shadow-lg">

                            <div className="card-body">
                                <div className='flex items-center gap-2'>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full  ring-offset-base-100 ring-offset-2">
                                            <img src="https://i.ibb.co/vVdQfYN/Toyota-RAV4.png" />
                                        </div>
                                    </div>
                                    <h2>John Doe</h2>
                                </div>
                                <div>
                                    <p>They have very nice car!</p>
                                    <div className='flex mt-4'>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='my-4'>
                        <div className="dark:bg-zinc-600 card mx-2 md:mx-6 shadow-lg">

                            <div className="card-body">
                                <div className='flex items-center gap-2'>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full  ring-offset-base-100 ring-offset-2">
                                            <img src="https://i.ibb.co/vVdQfYN/Toyota-RAV4.png" />
                                        </div>
                                    </div>
                                    <h2>John Doe</h2>
                                </div>
                                <div>
                                    <p>They have very nice car!</p>
                                    <div className='flex mt-4'>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>



                </Slider>
            </div>

            <div className='text-black dark:text-zinc-400 my-4 lg:my-10 md:hidden block'>
                <Slider  {...settingsTwo}>
                    <div className='my-4'>
                        <div className="dark:bg-zinc-600 card mx-2 md:mx-6 shadow-lg">

                            <div className="card-body">
                                <div className='flex items-center gap-2'>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full  ring-offset-base-100 ring-offset-2">
                                            <img src="https://i.ibb.co/vVdQfYN/Toyota-RAV4.png" />
                                        </div>
                                    </div>
                                    <h2>John Doe</h2>
                                </div>
                                <div>
                                    <p>They have very nice car!</p>
                                    <div className='flex mt-4'>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='my-4'>
                        <div className="dark:bg-zinc-600 card mx-2 md:mx-6 shadow-lg">

                            <div className="card-body">
                                <div className='flex items-center gap-2'>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full  ring-offset-base-100 ring-offset-2">
                                            <img src="https://i.ibb.co/vVdQfYN/Toyota-RAV4.png" />
                                        </div>
                                    </div>
                                    <h2>Rita</h2>
                                </div>
                                <div>
                                    <p>I love their customer services!</p>
                                    <div className='flex mt-4'>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='my-4'>
                        <div className="dark:bg-zinc-600 card mx-2 md:mx-6 shadow-lg">

                            <div className="card-body">
                                <div className='flex items-center gap-2'>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full  ring-offset-base-100 ring-offset-2">
                                            <img src="https://i.ibb.co/vVdQfYN/Toyota-RAV4.png" />
                                        </div>
                                    </div>
                                    <h2>Mr. Milar</h2>
                                </div>
                                <div>
                                    <p>collection is awesome.!</p>
                                    <div className='flex mt-4'>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='my-4'>
                        <div className="dark:bg-zinc-600 card mx-2 md:mx-6 shadow-lg">

                            <div className="card-body">
                                <div className='flex items-center gap-2'>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full  ring-offset-base-100 ring-offset-2">
                                            <img src="https://i.ibb.co/vVdQfYN/Toyota-RAV4.png" />
                                        </div>
                                    </div>
                                    <h2>John Doe</h2>
                                </div>
                                <div>
                                    <p>They have very nice car!</p>
                                    <div className='flex mt-4'>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='my-4'>
                        <div className="dark:bg-zinc-600 card mx-2 md:mx-6 shadow-lg">

                            <div className="card-body">
                                <div className='flex items-center gap-2'>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full  ring-offset-base-100 ring-offset-2">
                                            <img src="https://i.ibb.co/vVdQfYN/Toyota-RAV4.png" />
                                        </div>
                                    </div>
                                    <h2>John Doe</h2>
                                </div>
                                <div>
                                    <p>They have very nice car!</p>
                                    <div className='flex mt-4'>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>



                </Slider>
            </div>
        </div>
    );
};

export default Testimonials;
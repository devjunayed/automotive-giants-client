
const About = () => {
    return (
        <div>
            <div className="hero  max-w-full min-h-[40vh] md:min-h-[80vh] mb-4 md:mb-10" style={{ backgroundImage: 'url(https://i.ibb.co/CbNWPCP/about-us-banner.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                    <h1 className=" text-2xl md:text-5xl text-center lg:my-10 font-bold">About <span className="text-purple-600">AutomotiveGiants</span></h1>
                        <p className=" mb-2 lg:mb-5">A pioneering force in the auto industry, we prioritize innovation, sustainability, and customer satisfaction. Our team excels in designing cutting-edge vehicles, redefining the driving experience for the future.</p>
                    </div>
                </div>
            </div>
           
            <div className="text-black dark:text-zinc-400 m-4 md:m-10">
                <p className="md:text-xl leading-8">
                    AutomotiveGiant is a leading automotive company dedicated to providing high-quality vehicles and services to our valued customers. With a rich history and a commitment to excellence, we have been a trusted name in the automotive industry for decades.
                </p>
                <p className="md:text-xl leading-8 mt-4">
                    At AutomotiveGiant, we offer a wide range of vehicles, including cars, SUVs, trucks, and more. Our mission is to deliver vehicles that combine innovative technology, exceptional performance, and stylish design to enhance your driving experience.
                </p>
                <p className="md:text-xl leading-8 mt-4">
                    Our team of dedicated professionals works tirelessly to ensure that you have access to the latest and greatest in the automotive world. Whether you&rsquo;re looking for eco-friendly electric cars, powerful SUVs, or elegant sedans, we have the perfect vehicle to meet your needs.
                </p>
                <p className="md:text-xl leading-8 mt-4">
                    We take pride in our commitment to customer satisfaction, and our dealerships are staffed with knowledgeable and friendly experts who are ready to assist you in finding the ideal vehicle and provide top-notch service and maintenance.
                </p>
                <p className="md:text-xl leading-8 mt-4">
                    Thank you for considering AutomotiveGiant for your automotive needs. We look forward to serving you and being a part of your automotive journey.
                </p>
            </div>
        </div>
    );
};

export default About;

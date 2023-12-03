import carSell from '../../assets/images/car-sell.png';
import carMaintenance from '../../assets/images/car-maintenance.png';
import carFinancial from '../../assets/images/financial.png';

const Services = () => {
    return (
        <div>
            <h1 className="text-black dark:text-zinc-400 text-3xl md:text-5xl text-center my-4 md:my-10">Our <span className="text-purple-600">Services</span></h1>
            <div className="flex justify-center gap-4 flex-wrap mx-10 text-black dark:text-zinc-400">
                <div className="dark:bg-zinc-600 card w-full md:w-1/4  shadow-xl">
                    <figure><img src={carSell} alt="Shoes" className="w-1/2 pt-8" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Vehicle Sales</h2>
                        <p>Discover a diverse array of top-quality vehicles at Automotive Giants. From sleek city cars to rugged off-road SUVs, we provide a wide selection to match your lifestyle and budget. Our attentive sales team is dedicated to guiding you to your perfect ride.</p>
                    </div>
                </div>
                <div className="dark:bg-zinc-600 card w-full md:w-1/4 shadow-xl">
                    <figure><img src={carMaintenance} alt="Shoes" className='w-1/2 pt-8' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Auto Maintenance</h2>
                        <p>At Automotive Giants, our skilled technicians ensure your vehicle remains in peak condition. From routine maintenance to complex repairs, we offer comprehensive services. Trust us to keep your car safe, reliable, and performing at its best.</p>
                    </div>
                </div>
                <div className="dark:bg-zinc-600 card w-full md:w-1/4 shadow-xl">
                    <figure><img src={carFinancial} alt="Shoes" className='w-1/2 pt-8' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Financing Solutions</h2>
                        <p>We understand that owning your dream car is essential. Automotive Giants offers customized financing options with competitive rates, making it easier for you to drive away in the vehicle you desire. Our flexible plans cater to your specific needs.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
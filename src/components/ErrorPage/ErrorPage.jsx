import ErrorImg from '../../assets/images/page_not_found.png';

const ErrorPage = () => {
    return (
        <div className='mx-auto my-2 md:my-10 text-center'>
            <img className='mx-auto w-1/2' src={ErrorImg} alt="" />
            <h1 className='text-6xl text-indigo-800'>Page not found</h1>
        </div>
    );
};

export default ErrorPage;
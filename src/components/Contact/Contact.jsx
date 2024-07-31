


export default function Contact() {


    return (
        <div data-aos="flip-left" className='mx-auto flex my-10 flex-col'>
            <form className=" p-10 space-y-6 shadow-2xl mx-auto contact-form w-10/12 md:w-6/12" >

                <h2 className='text-center text-3xl md:text-5xl my-4 text-black dark:text-zinc-400'>Contact Us</h2>

                <div className='flex flex-col'>
                    <label className='text-md lg:text-xl text-black dark:text-zinc-400'>Name</label>
                    <input required type="text" placeholder='Your name...' className='py-2 mt-2 px-4 border border-gray-800 bg-white dark:bg-slate-800' name="to_name" />
                </div>
                <div className='flex flex-col'>
                    <label className='text-md lg:text-xl text-black dark:text-zinc-400'>Email</label>
                    <input required type="text" placeholder='Your email...' className='py-2 mt-2 px-4 border border-gray-800  bg-white dark:bg-slate-800' name="to_email" />
                </div>
                <div className='flex flex-col'>
                    <label className='text-md lg:text-xl text-black dark:text-zinc-400'>Phone</label>
                    <input required type="text" placeholder='Your phone number...' className='py-2 mt-2 px-4 border border-gray-800  bg-white dark:bg-slate-800' name="to_phone" />
                </div>
                <div className='flex flex-col'>
                    <label className='text-md lg:text-xl text-black dark:text-zinc-400'>Address</label>
                    <input required type="text" placeholder='Your address...' className='py-2 mt-2 px-4 border border-gray-800  bg-white dark:bg-slate-800' name="to_address" />
                </div>

                <div className='flex flex-col'>
                    <label className='text-md lg:text-xl text-black dark:text-zinc-400'>Message</label>
                    <textarea name="message" placeholder='Your message here....' className=' bg-white dark:bg-slate-800 py-2 h-32 mt-2 px-4 border border-gray-800' />
                </div>
                <div className='text-center'>
                    <input type="submit" className='btn bg-black text-white px-10 mx-auto' value="Send" />
                </div>
            </form>

        </div>
    );
}
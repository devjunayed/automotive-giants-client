import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible, AiFillGoogleCircle } from 'react-icons/ai';
import { useContext, useState } from "react";
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import ToastMessage from "../Utils/ToastMessage";



const Login = () => {
    const navigate = useNavigate();
    const { setLoginUserId, signInWithEmail, setUser, signInWithGoogle } = useContext(AuthContext);
    const [isVisible, setVisible] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


       
            signInWithEmail(email, password)
                .then(result => {
                    setUser(result.user);
                    setLoginUserId(result.user.uid);
                    Swal.fire(
                        {
                            icon: 'success',
                            title: 'logged in successfully',
                            timer: 1500
                        }   
                    )
                    setTimeout(()=>{
                        navigate("/");
                    }, 1200);
                })
                .catch(err => {
                   if(err.code === 'auth/invalid-login-credentials'){
                        ToastMessage('User not found');
                    }
                    console.log(err.code);
                    console.log(err.message);
                });
       



    }


    const googleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            setUser(result.user);
            setLoginUserId(result.user.uid);
            Swal.fire(
                {
                    icon: 'success',
                    title: 'Logged in successfully',
                    timer: 1500

                }
            )
            setTimeout(()=>{
                navigate("/");
            }, );
        })
        .catch(err => {
            console.log(err);
        })

    }
    return (
        <div className="hero min-h-screen">
            <div className="card  lg:m-10 w-full max-w-xs  md:max-w-lg lg:max-w-xl shadow-2xl">
                <h1 className="text-black dark:text-zinc-400 text-2xl md:text-5xl text-center p-4">Login Now</h1>
                <form className="card-body" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black dark:text-zinc-400">Email</span>
                        </label>
                        <input  name="email" type="email" placeholder="email" className="input bg-white dark:bg-slate-800 input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black dark:text-zinc-400">Password</span>
                        </label>
                        <span className="flex w-full relative">
                            <input  name="password" type={isVisible ? 'text' : 'password'} placeholder="password" className="input bg-white dark:bg-slate-800 input-bordered w-full" required />
                            {
                                isVisible ? <AiFillEyeInvisible onClick={() => setVisible(!isVisible)} className="absolute right-4 top-4"></AiFillEyeInvisible> :
                                    <AiFillEye onClick={() => setVisible(!isVisible)} className="absolute right-4 top-4"></AiFillEye>
                            }
                        </span>
                        
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-gradient-to-l from-indigo-800 to-purple-800 text-white">Login</button>
                    </div>

                    <label className="label text-end flex justify-end">
                        <span className="label-text ">Don&#39;t have an account? <Link to='/register' className="text-blue-600">Register Now</Link></span>
                    </label>
                </form>
                <span className="text-center">OR</span>
                <div className="text-center w-11/12 flex mx-auto m-4">
               
                    <button onClick={googleSignIn} className="text-black dark:text-zinc-400 flex justify-center items-center  gap-4 text-center border p-2 w-full rounded-lg border-orange-600"> <AiFillGoogleCircle className="text-3xl"></AiFillGoogleCircle>Sign in With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
import auth from '../firebase/firebase.config';
import { createContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, signInWithEmailAndPassword } from 'firebase/auth'

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loginUserId, setLoginUserId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInWithEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // load cart data
    useEffect(() => {
        fetch(`https://automotive-giants-szycu79ub-devjunayeds-projects.vercel.app/cart/${user?.uid}`)
            .then(res => res.json())
            .then(data => setCart(data));
    }, [user]);

    // observer auth state 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            unSubscribe();
        }
    }, []);


    const values = { setLoginUserId, loginUserId, user, loading, createUser, setUser, signInWithGoogle, logOut, signInWithEmail, cart, setCart };
    return (
        <AuthContext.Provider value={values}>
            <ToastContainer
                position="top-right"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="dark"
            />

            {
                children
            }
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;
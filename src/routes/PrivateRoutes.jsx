import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <div className="flex justify-center">
            <span className="mx-auto loading loading-ring loading-lg"></span>
        </div>;
    }

    if(user){
       return children;
    }

    if(!user){
        return <Navigate to="/login"></Navigate>;
    }
};

PrivateRoutes.propTypes = {
    children: PropTypes.node
}

export default PrivateRoutes;
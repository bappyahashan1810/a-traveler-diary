import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div><span className="loading loading-dots loading-lg text-blue-500 "></span>
            <span className="loading loading-dots loading-lg text-blue-500 "></span>
            <span className="loading loading-dots loading-lg text-blue-500 "></span>
        </div>
    }
    if (user) {
        return children;

    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;
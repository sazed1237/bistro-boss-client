import React from 'react';
import useAuth from '../hooks/useAuth';
import Loading from '../Pages/Shared/Loading/Loading';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({ children }) => {

    const { user, loading } = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()

    if (isAdminLoading) {
        return <Loading></Loading>
    }

    if (isAdmin) {
        return children;
    }

    return <Navigate to='/' state={{ from: location }} replace ></Navigate>
};

export default AdminRoute;
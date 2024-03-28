import React from 'react';
import useAuth from '../../../hooks/useAuth';

const UserHome = () => {
    const { user } = useAuth()
    return (
        <div>
            <h1>Welcome Back
                <span>{user?.displayName}</span>
            </h1>
        </div>
    );
};

export default UserHome;
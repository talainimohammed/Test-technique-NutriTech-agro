import React from 'react';
import ListProducts from './Components/ListProducts/ListProduct';
const Admin = ({IsLoggedIn}) => {
    return (
        <div>
            {IsLoggedIn ? (
                <div>
                    <h1>Admin Dashboard</h1>
                    <ListProducts />
                </div>
                ) : (
                <div>You must be logged in to view this page.</div>
            )}
        </div>
    );
};

export default Admin;
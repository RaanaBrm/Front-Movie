import React, { useContext } from 'react';
import { MoviesContext } from "../../context/MoviesContext";

const Logout = () => {
    const { handlLogout } = useContext(MoviesContext)

    handlLogout()
    return (
        <div>Logging out...</div>
    );
};

export default Logout;

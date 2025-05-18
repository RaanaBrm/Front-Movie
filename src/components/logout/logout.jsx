import React, { useContext, useEffect } from "react";
import { MoviesContext } from "../../context/MoviesContext";

const Logout = () => {
    const { handleLogout } = useContext(MoviesContext);

    useEffect(() => {
        handleLogout();
    }, []);

    return <div></div>;
};

export default Logout;

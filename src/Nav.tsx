import React from 'react'; //import React package from react
import { Link, useLocation } from 'react-router-dom'; //import Link component from react-router-dom

function Nav(){
    const location = useLocation(); // use JSON to stringify the location object to see the pathname, search, and hash properties.
    const {pathname} = useLocation(); //useLocation is a hook that returns the location object that represents the current URL.

    return(
        <>  
        {/* {JSON.stringify(location)}<br />
        {JSON.stringify(pathname)} */}
            <nav className='nav nav-pills mt-2'>
                <Link to="/HelloWorld"
                    className={`nav-link ${pathname.includes("HelloWorld") ? "active" : ""}`}>Hello</Link>
                <Link to="/Labs/a3"
                    className={`nav-link ${pathname.includes("Labs") ? "active" : ""}`}>Labs</Link>
                <Link to="/Kanbas" 
                    className={`nav-link ${pathname.includes("Kanbas") ? "active" : ""}`}>Kanbas</Link>
            </nav>
        </>
    );
}

export default Nav; //export the Nav component to be used in other files.
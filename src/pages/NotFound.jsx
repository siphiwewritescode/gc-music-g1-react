import react from 'react';
import {Link} from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <img src="/icon.jfif" alt="Girl Code Icon" />
            <h1>Oh no! :(</h1>
            <h3>The page you requested could not be found</h3>
            <Link to="/">Return Home</Link>
        </div>
    )
}

export default NotFound
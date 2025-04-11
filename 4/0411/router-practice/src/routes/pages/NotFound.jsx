import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>Not Found</h1>
            <Link to={"/"}>홈으로</Link>
            
        </div>
    );
};

export default NotFound;
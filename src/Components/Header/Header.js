import React from 'react';

const Header = () => {
    return (
        <div className="text-center bg-dark text-white py-1">
            <h1>SK Solutions</h1>
            <p><small className="ms-5 text-warning">... all solution under one roof.</small></p>
            {/* <p className="ms-5">... all solution under one roof.</p> */}
            <h3 className="text-white-50">Total Budget: 10 Million</h3>
        </div>
    );
};

export default Header;
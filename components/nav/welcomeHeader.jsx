import React from "react";

const WelcomeHeader = () => {
    const username = 'Ryan Callens';
    return (
        <div className='m-16 mt-9 mr-8'>
            <h6 className='font-poppins font-medium text-lg text-primary'>Hi {username},</h6>
            <h3 className='font-poppings font-semibold text-4xl text-primary'>Welcome back</h3>
        </div>
    );
};

export default WelcomeHeader;
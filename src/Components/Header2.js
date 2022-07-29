import React from 'react';
import clock from '../assets/icons/clock.svg';
import marker from '../assets/icons/marker.svg';
import phone from '../assets/icons/phone.svg'

const Header2 = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 mb:grid-cols-2 gap-5 w-full lg:w-6/6 ml-24 lg:ml-4 lg:px-28 '>
            <div class="card card-side bg-accent shadow-xl pl-5">
                <figure><img src={clock} alt="Movie"/></figure>
                <div class="card-body text-white">
                    <h2 class="card-title ">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    
                </div>
            </div>
            <div class="card card-side bg-neutral shadow-xl pl-5">
                <figure><img src={marker} alt="Movie"/></figure>
                <div class="card-body text-white">
                    <h2 class="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    
                </div>
            </div>
            <div class="card card-side bg-accent shadow-xl pl-5">
                <figure><img src={phone} alt="Movie"/></figure>
                <div class="card-body text-white">
                    <h2 class="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    
                </div>
            </div>

        </div>
    );
};

export default Header2;
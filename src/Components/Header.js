import React from 'react';
import chair from '../assets/images/chair.png';

const Header = () => {
    return (
        <div>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse px-32 ">
                    <img style={{"width":"794px", "height":"320px"}} src={chair} class="max-w-sm rounded-lg shadow-2xl " />
                    <div>
                        <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary bg-accent">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header; <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
        <img src="https://placeimg.com/260/400/arch" class="max-w-sm rounded-lg shadow-2xl" />
        <div>
            <h1 class="text-5xl font-bold">Box Office News!</h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-primary bg-gradient-to-r from-exgf to-nexgf">Get Started</button>
        </div>
    </div>
</div>
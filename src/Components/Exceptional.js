import React from 'react';
import treatement from '../assets/images/treatment.png';
const Exceptional = () => {
    return (
        <div>
            <div class="hero min-h-screen px-40 mt-5 lg:mt-10">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={treatement} class="max-w-sm rounded-lg shadow-2xl" />
                    <div className='pl-10'>
                        <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop </p>
                        <button class="btn btn-primary bg-accent">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;
import React from 'react';

const Nabvar = () => {
    const items = <>
                            
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Appoinment</a></li>
                            <li><a>Reviews</a></li>
                            <li><a>Contact Us</a></li>
                            <li><a>Login</a></li>
                            
    </>
return (
    <div>
        <div  class="navbar bg-black-700 font-semibold ">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                        {items}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">Homeo Hall</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {items}
                </ul>
            </div>
           
        </div>
    </div>
);
};

export default Nabvar;
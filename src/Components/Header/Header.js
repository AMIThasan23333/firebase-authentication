import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        // <div className='d-flex'>


        //         <div className="navbar bg-neutral text-neutral-content">
        //         <Link to='/' className="btn btn-ghost normal-case text-xl">Home</Link>
        //         </div>
        //         <div className="navbar bg-base-300">
        //         <Link to='/login' className="btn btn-ghost normal-case text-xl">Login</Link>
        //         </div>
        //         <div className="navbar bg-primary text-primary-content">
        //         <Link to='/register' className="btn btn-ghost normal-case text-xl">Register</Link>
        //         </div>

        //         <div className="navbar bg-base-300">
        //         <Link to='/About' className="btn btn-ghost normal-case text-xl">About</Link>
        //         </div>


        // </div>

        <div>
         <div className="navbar bg-base-300">
              <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
              <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
              <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>

              <Link to='/' className="btn btn-ghost normal-case text-xl">Home</Link>


       </div>

        </div>

        
    );
};

export default Header;
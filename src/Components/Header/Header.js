import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './../Context/UserContext';

const Header = () => {


    const {user, logOut} = useContext(AuthContext)


    const handleSignOut = () => {

        logOut()
        .then(() => {

        })
        .catch(error => console.error(error));



    }

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


        {   user?.email && <span>Welcome {user.email}</span>}

      {
        user?.email ? 

        <button onClick={handleSignOut} className='btn btn-sm'>SignOut</button>

        : <Link className='btn btn-sm' to='/login'> Login </Link>
      }




       </div>

        </div>

        
    );
};

export default Header;
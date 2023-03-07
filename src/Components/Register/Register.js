import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './../Context/UserContext';

const Register = () => {


    const {createUser} = useContext(AuthContext)



    const handleSubmit = event => {

        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.password.value;
        console.log(email,password, name);

        createUser(email,password)
        .then( result => {

            const user = result.user;

            console.log("registered", user);

        })
        .catch(error => {
            console.error(error);
            
        })


    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">

      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <Link to='/login' className="label-text-alt link link-hover">AlREADY hAVE AN ACCOUNT</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
    );
};

export default Register;
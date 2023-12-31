import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {
    const { handleGoogleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

    const handleGoogle = () => {
        handleGoogleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Successfully LogIn');
                navigate(from, { replace: true });

            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">No one realizes how beautiful it is to travel until he comes home and rests his head on his old, familiar pillow.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p><small>Are you new?Please </small><Link to='/signin'><small className='text-blue-500'>SignIn</small></Link></p>
                        <div className="flex flex-col w-full border-opacity-50 container mx-auto">
                            <div className="grid h-20 card bg-base-300 rounded-box place-items-center flex items-center">

                                <button onClick={handleGoogle} className='flex items-center w-full justify-center'>
                                    <FaGoogle className='text-xl text-blue mr-2'></FaGoogle>
                                    <p>Google</p>
                                </button>
                            </div>
                            <div className="divider">OR</div>
                            <button className='flex items-center w-full justify-center'>
                                <FaGithub className='text-xl text-blue mr-2'></FaGithub>
                                <p>GitHub</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
import Navbar from "../Home/Shared/Navbar/Navbar";
import { Link } from "react-router-dom";

const Login = () => {


    const handleLogin = (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
    }
    return (
        <div>
            <Navbar></Navbar>

            <div className="shadow-2xl md:w-1/2 p-4 mx-auto mt-4">
                <h2 className="pt-8 text-center text-4xl font-bold">Please Login </h2>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center text-blue-500"><small>Dont’t Have An Account ?<Link to='/register'>Register</Link> </small></p>


            </div>


        </div>
    );
};

export default Login;
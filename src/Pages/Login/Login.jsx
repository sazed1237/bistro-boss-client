import loginImg from '../../assets/others/authentication2.png';
import loginBG from '../../assets/others/authentication.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

// captcha
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';




const Login = () => {

    const captchaRef = useRef(null)
    const [disabled, setDisabled] = useState(true)
    const [error, setError] = useState(true)

    const { singIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/';


    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleValidateCaptcha = event => {
        const user_captcha_input = captchaRef.current.value;
        console.log(user_captcha_input)

        if (validateCaptcha(user_captcha_input) == true) {
            setDisabled(false)
            setError('')
        }
        else {
            setError('Captcha Does Not Match');
            setDisabled(true)
        }
    }


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        singIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                Swal.fire({
                    title: "User Login",
                    text: "You are Successfully Login",
                    icon: "success"
                });
                
                navigate(from, { replace: true })
            })

    }


    return (

        <>
            <Helmet>
                <title>Bistro Boss | Sing up</title>
            </Helmet>

            <section style={{ backgroundImage: `url(${loginBG})` }} className='w-full   flex items-center'>
                <div className="w-10/12 mx-auto hero my-24 bg-base-200">

                    <div style={{ backgroundImage: `url(${loginBG})` }} className="grid md:grid-cols-2 gap-10 m-5 shadow-xl shadow-gray-500">
                        <div className="flex items-center">
                            <img src={loginImg} alt="" />
                        </div>

                        <div className="card shrink-0 w-full md:max-w-md ">
                            <h1 className="text-2xl text-center mt-3 font-bold">Login now!</h1>

                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered rounded" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="Enter Your Password" className="input input-bordered rounded" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>

                                {/* captcha */}
                                <div className="form-control">
                                    <label>
                                        <LoadCanvasTemplate reloadColor='#D1A054' />
                                    </label>
                                    <input onBlur={handleValidateCaptcha} type="text" ref={captchaRef} name='typeCaptcha' placeholder="Type the text above" className="input input-bordered rounded" required />
                                    <small className='text-red-500 text-center'>{error}</small>
                                    {/* <button  className='btn-primary'>validate captcha</button> */}
                                </div>


                                <div className="form-control mt-6">
                                    <input className='btn bg-[#D1A054] bg-opacity-60 hover:bg-[#D1A054] text-white' type="submit" disabled={disabled} value="Sing In" />
                                    <span className='text-center my-2 text-[#D1A054]'>New Here? <Link to={'/singup'}>Create a New Account</Link></span>
                                </div>
                                <div>
                                    <SocialLogin></SocialLogin>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
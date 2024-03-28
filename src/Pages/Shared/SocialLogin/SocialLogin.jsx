import { FaFacebook, FaFacebookF, FaGithub, FaGoogle, FaInstagram } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const SocialLogin = () => {

    const { googleSingIn } = useAuth()
    const axiosPublic = useAxiosPublic()

    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/';


    const handleGoogleSingIn = () => {
        googleSingIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)

                // user entry in the database
                const userInfo = {
                    name: loggedUser?.displayName,
                    email: loggedUser?.email
                }

                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                        
                        navigate(from, { replace: true })
                    })


            })
    }

    return (
        <div className="text-center">
            <p><small>Or Sing in with</small></p>
            <div className="flex items-center justify-center gap-4 text-2xl mt-2 ">
                <button onClick={handleGoogleSingIn}><FaGoogle /></button>
                <button> <FaFacebook /></button>
                <button><FaGithub /></button>
                <button><FaInstagram /></button>
            </div>
        </div>
    );
};

export default SocialLogin;
import imgLogin from '../../assets/foto.login.png'

function Login() {

    return (
        <div className="login-container">

            <div className="login-left">
                <img src={imgLogin} alt="education illustration" />
            </div>

            <div className="login-right">
                <h1>Login an account</h1>
                <p className="signup-text">
                    Don't have account? <a href="#">Sign in</a>
                </p>

                <div className="name-row">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Last Name" />
                </div>

                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Enter your password" />

                <div className="terms">
                    <input type="checkbox" />login

                    <span> I agree to the <a href="#">Terms & Conditions</a>
                    </span>
                </div>

                <button className="login-btn"><a href="/dashboard">Log in</a></button>

                <div className="divider">
                    <span>Or login with</span>
                </div>

                <div className="social-login">
                    <button className="google">G</button>
                    <button className="facebook">f</button>
                    <button className="apple"></button>
                </div>

            </div>
        </div>
        // <div className= 'wrapper'>
        //     <div className="Form-box login">
        //         <form action="">
        //             <h1>Login an account</h1>
        //             <div className="register-link">
        //             <p>Don't have an account? <a
        //             href= "#">Sign</a></p>
        //             </div>
        //             <div className="input-box">
        //                 <input type="text"
        //                 placeholder='Name' required />
        //             </div>
        //             <div className="input-box">
        //                 <input type="text"
        //                 placeholder='Last Name' required />
        //             </div>
        //             <div className="input-box">
        //                 <input type="text"
        //                 placeholder='Email' required />
        //             </div>
        //             <div className="input-box">
        //                 <input type="password"
        //                 placeholder='Enter your password' required />
        //             </div>


        //             <div className="remember-forget">
        //                     <label><input type="checkbox" 
        //                     />I agree to the</label>
        //                     <a href ="#">  Terms & Conditions</a>
        //             </div>

        //             <button type="submit">Login</button>


        //         </form>
        //     </div>
        // </div>
    )


}
export default Login;

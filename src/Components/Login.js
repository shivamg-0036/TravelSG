import React, { useState, useEffect } from 'react'
import './Login.css'
import Navbar from './Navbar';
import Loader from './Loader';
export default function Login() {


    const [email, setEmail] = useState('');
    const [cla, setClass] = useState('');
    const [password, setPassword] = useState('');
    const [strengthClass, setStrengthClass] = useState('');

    const [loading, setLoading] = useState(false)

    useEffect(() => {

        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)


    }, []);

    const handleSignupClick = () => {
        setClass('signup-mode');
    };

    const handleSigninClick = () => {
        setClass('');
    };

    const validateEmail = (e) => {
        const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        const email = e.target.value;
        console.log(email);
        if (email.match(pattern)) {
            setEmail('valid');

        } else if (email === '') {
            setEmail('');
        } else {
            setEmail('invalid');
        }
    };

    function calculatePasswordStrength(password) {
        let strength = 0;

        if (password.length >= 5) {
            strength++;
        }

        if (password.length >= 8) {
            strength++;
        }

        if (/[A-Z]/.test(password)) {
            strength++;
        }

        if (/[a-z]/.test(password)) {
            strength++;
        }

        if (/[.,@$%^&]/.test(password)) {
            strength++;
        }

        if (/[0-9]/.test(password)) {
            strength++;
        }

        return strength;
    };

    const handlePasswordChange = (e) => {
        const updatedPassword = e.target.value;
        console.log(updatedPassword);
        setPassword(updatedPassword);

        const strength = calculatePasswordStrength(updatedPassword);
        if (strength <= 2) {
            setStrengthClass('weak');
        } else if (strength > 3 && strength <= 4) {
            setStrengthClass('medium');
        } else {
            setStrengthClass('strong');
        }

        if (updatedPassword === '') {
            setStrengthClass('');
        }
    };


    return (
        loading ? <Loader /> :
        <>
        <Navbar />

        <section className={`f-container section ${cla}`}>
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="" className="form signinform" method="post">
                        <h2 className="form-title">Sign in</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" name="username" placeholder="Username" />
                        </div>

                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" name="password" placeholder="Password" id="password" />


                        </div>

                        <input type="submit" value="Login" className="l-btn solid" />

                        <p className="social-text">Or Sign in with social platform</p>
                        <div className="l-social-media">
                            <a href="#" className="social-icon">
                                <i className="fab fa-facebook-f"></i>
                            </a>

                            <a href="#" className="social-icon">
                                <i className="fab fa-twitter"></i>
                            </a>

                            <a href="#" className="social-icon">
                                <i className="fab fa-google"></i>
                            </a>

                            <a href="#" className="social-icon">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </form>


                    <form action="" id="form" className={`form signupform ${strengthClass} ${email}`} method="post">
                        <h2 className="form-title">Sign Up</h2>

                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" name="name" placeholder="Name" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" name="username" placeholder="Username" />
                        </div>

                        <div className="input-field email">
                            <i className="fa fa-envelope i"></i>
                            <input type="text" name="email" id="email" onKeyUp={validateEmail} placeholder="Email" className="e" />
                            <span className="indicator"></span>
                        </div>

                        <div className="input-field">
                            <i className="fa fa-phone-square"></i>
                            <input type="number" name="phone" placeholder="Phone Number" />
                        </div>

                        <div className="input-field meter">
                            <i className="fas fa-lock"></i>
                            <input type="password" name="password" placeholder="Password" id="mypassword" className={`passer ${strengthClass}`} onKeyUp={handlePasswordChange} />
                            <span className="strengthmeter"></span>
                        </div>



                        <input type="submit" value="Sign Up" className="l-btn solid" />


                        <p className="social-text">Or Sign Up with social platform</p>
                        <div className="l-social-media">
                            <a href="#" className="social-icon">
                                <i className="fab fa-facebook-f"></i>
                            </a>

                            <a href="#" className="social-icon">
                                <i className="fab fa-twitter"></i>
                            </a>

                            <a href="#" className="social-icon">
                                <i className="fab fa-google"></i>
                            </a>

                            <a href="#" className="social-icon">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </form>

                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="pcontent">
                        <h3>New Here ???</h3>
                        <p>If you're new to our community, Let's begin this journey together – sign up today and let the adventure unfold!</p>
                        <button className="l-btn transparent" id="signup-btn" onClick={handleSignupClick}> Sign Up</button>
                    </div>
                    <div className='image-content'>
                    <img src="log.svg" className="l-image" />
                    </div>
                   
                </div>

                <div className="panel right-panel">
                    <div className="pcontent">
                        <h3>One of Us ???</h3>
                        <p>
                            The sign-in process is your gateway to a community where your voice matters. Continue the journey together. Welcome back!</p>
                        <button className="l-btn transparent" id="signin-btn" onClick={handleSigninClick}>Sign In</button>
                    </div>
                    <div className='image-content'>
                        <img src="register.svg" className="l-image" />
                    </div>

                </div>
            </div>
        </section>

        </>
      
    )
}

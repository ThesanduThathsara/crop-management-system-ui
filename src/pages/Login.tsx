import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './login-page.css'
import logo_icon from '../assets/green-shadow-high-resolution-logo-transparent.png'
export default function Login(){
    return (
        <>
            <header>
                <img width="150" height="80" src={logo_icon}/>
            </header>
            <section id="login-section">
                <div id="login" className="container">
                    <h1 id="login-title">Sign in</h1>
                    <div id="login-form" className="container">
                        <div id="email-div" className="form-floating mb-3">
                            <input  type="email" className="form-control" id="floatingInput"
                                   placeholder="name@example.com"/>
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div id="password-div" className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword"
                                   placeholder="Password"/>
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                    </div>
                    <div id="button-div" className="d-grid gap-2 d-md-block container ">
                        <button id="login-button" className="btn btn-primary btn-lg container" type="button">Login
                        </button>
                        <button id="signup-button" className="btn btn-primary btn-lg container" type="button"
                                >Sign-Up
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
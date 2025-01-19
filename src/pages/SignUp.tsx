import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './signUp-page.css'
import logo_icon from '../assets/green-shadow-high-resolution-logo-transparent.png'

export default function SignUp() {
    return (
        <>
            <header>
                <img width="150" height="80" src={logo_icon}/>
            </header>
            <section id="signUp-section">
                <div id="signUp" className="container">
                    <h1 id="signUp-title">Sign-Up</h1>
                    <div id="signUp-form" className="container">
                        <div id="email-div" className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput"
                                   placeholder="name@example.com"/>
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div id="password-div" className="form-floating">
                            <input type="password" className="form-control"
                                   id="floatingPassword"
                                   placeholder="Password"/>
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div id="role-div" className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput2"
                                   placeholder="Administrator"/>
                            <label htmlFor="floatingInput2">Role</label>
                        </div>
                    </div>
                    <div id="button-div" className="d-grid gap-2 d-md-block container ">
                        <button id="signUp-button" className="btn btn-primary btn-lg container" type="button">Sign-Up
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
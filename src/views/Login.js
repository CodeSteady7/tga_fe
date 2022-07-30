import React, { useState } from "react"
import { useNavigate  } from 'react-router-dom';
import Auth from "../services/Auth.js"

function Login() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [validation, setValidation] = useState([]);

	const navigate = useNavigate();

	const loginHandler = async (e) => {
		e.preventDefault();
		
		await Auth.authLogin(email, password)
        .then((response) => {
            //set token on localStorage
            localStorage.setItem('token', response.data.access_token);
            localStorage.setItem('role', response.data.user.role);

			switch (response.data.user.role) {
				case 'admin':
					navigate('/admin');
					break;
				case 'auditee':
					navigate('/auditee');
					break;
				case 'auditor':
					navigate('/auditor');
					break;
				case 'manager':
					navigate('/manager');
					break;
				default: 
					break;
			}
        })
        .catch((error) => {
            setValidation(error.response.data);
        })

	}

	return (
		<div
			className="vertical-layout vertical-menu-modern blank-page navbar-floating footer-static  "
			data-open="click"
			data-menu="vertical-menu-modern"
			data-col="blank-page"
		>
			{/* <!-- BEGIN: Content--> */}
			<div className="app-content content ">
				<div className="content-overlay"></div>
				<div className="header-navbar-shadow"></div>
				<div className="content-wrapper">
					<div className="content-header row"></div>
					<div className="content-body">
						<div className="auth-wrapper auth-cover">
							<div className="auth-inner row m-0">
								<div className="d-none d-lg-flex col-lg-8 align-items-center p-5">
									<div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
										<img
											className="img-fluid"
											src="../../../app-assets/images/pages/login-v2.svg"
											alt="Login V2"
										/>
									</div>
								</div>

								<div className="d-flex col-lg-4 align-items-center auth-bg px-2 p-lg-5">
									<div className="col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2 mx-auto">
										<h2 className="card-title fw-bold mb-1">
											Selamat Datang di Aplikasi Audit Mutu Internal
										</h2>
										{
											validation.message && (
												<div className="alert alert-danger">
													{validation.message}
												</div>
											)
										}
										<form className="auth-login-form mt-2" onSubmit={(e) => loginHandler(e)} >
											<div className="mb-1">
												<label className="form-label">
													Email
												</label>
												<input
													className="form-control"
													id="login-email"
													type="text"
													placeholder="john@example.com"
													aria-describedby="login-email"
													tabIndex="1"
													name="email"
													onChange={(e) => setEmail(e.target.value)}
												/>
											</div>
											<div className="mb-1">
												<div className="d-flex justify-content-between">
													<label className="form-label">
														Password
													</label>
													<a href="auth-forgot-password-cover.html">
														<small>Forgot Password?</small>
													</a>
												</div>
												<div className="input-group input-group-merge form-password-toggle">
													<input
														className="form-control form-control-merge"
														id="login-password"
														type="password"
														placeholder="············"
														aria-describedby="login-password"
														tabIndex="2"
														name="password"
														onChange={(e) => setPassword(e.target.value)}
													/>
													<span className="input-group-text cursor-pointer">
														<i data-feather="eye"></i>
													</span>
												</div>
											</div>
											<div className="mb-1">
												<div className="form-check">
													<input
														className="form-check-input"
														id="remember-me"
														type="checkbox"
														tabIndex="3"
													/>
													<label className="form-check-label">
														{" "}
														Remember Me
													</label>
												</div>
											</div>
											<button className="btn btn-primary w-100">Sign in</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login

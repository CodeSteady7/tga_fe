import React, { useState } from "react"
import axios from "axios"

import image from "../assets/img/pnl.jpg"
function Login() {
	const [user, setUser] = useState({
		email: "",
		password: "",
	})

	const onChangeInput = e => {
		const { name, value } = e.target
		setUser({ ...user, [name]: value })
	}

	const loginSubmit = async e => {
		e.preventDefault()
		try {
			const data = await axios.post(
				"http://localhost:4000/users/login",
				{ ...user },
				{
					withCredentials: true,
				}
			)
			// console.log("🚀 ~ file: Login.js ~ line 19 ~ Login ~ data", data.data)

			localStorage.setItem("user", data.data.user.name)
			localStorage.setItem("token", data.data.accesstoken)
			window.location.href = data.data.user.path
			// console.log("masuk data", data.data.user.path)
		} catch (err) {
			alert(err.response.data.msg)
		}
	}

	const tryLogin = async () => {
		return
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
								{/* <!-- Brand logo--> */}
								{/* <!-- /Brand logo--> */}
								{/* <!-- Left Text--> */}
								<div className="d-none d-lg-flex col-lg-8 align-items-center p-5">
									<div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
										<img
											className="img-fluid"
											// src="../../../app-assets/images/pages/login-v2.svg"
											src="../../../app-assets/images/pages/login-v2.svg"
											alt="Login V2"
										/>
									</div>
								</div>
								{/* <!-- /Left Text--> */}
								{/* <!-- Login--> */}
								<div className="d-flex col-lg-4 align-items-center auth-bg px-2 p-lg-5">
									<div className="col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2 mx-auto">
										<h2 className="card-title fw-bold mb-1">
											Selamat Datang di Aplikasi Audit Mutu Internal
										</h2>
										<form className="auth-login-form mt-2" onSubmit={loginSubmit}>
											<div className="mb-1">
												<label className="form-label" for="login-email">
													Email
												</label>
												<input
													className="form-control"
													id="login-email"
													type="text"
													placeholder="john@example.com"
													aria-describedby="login-email"
													autofocus=""
													tabindex="1"
													name="email"
													value={user.email}
													onChange={onChangeInput}
												/>
											</div>
											<div className="mb-1">
												<div className="d-flex justify-content-between">
													<label className="form-label" for="login-password">
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
														tabindex="2"
														name="password"
														value={user.password}
														onChange={onChangeInput}
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
														tabindex="3"
													/>
													<label className="form-check-label" for="remember-me">
														{" "}
														Remember Me
													</label>
												</div>
											</div>
											<button className="btn btn-primary w-100" tabindex="4">
												Sign in
											</button>
										</form>
									</div>
								</div>
								{/* <!-- /Login--> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login

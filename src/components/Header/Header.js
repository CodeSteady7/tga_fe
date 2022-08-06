import React, { useState, useContext } from "react"
import { ShoppingCart, Bell } from "react-feather"

function Header() {
	return (
		<>
			<nav className="header-navbar navbar navbar-expand-lg align-items-center floating-nav navbar-light navbar-shadow container-xxl">
				<div className="navbar-container d-flex content">
					<div className="bookmark-wrapper d-flex align-items-center">
						<ul className="nav navbar-nav d-xl-none">
							<li className="nav-item">
								<a className="nav-link menu-toggle" href="#">
									<i className="ficon" data-feather="menu"></i>
								</a>
							</li>
						</ul>
					</div>
					<ul className="nav navbar-nav align-items-center ms-auto">
						<li className="nav-item dropdown dropdown-notification me-25">
							<ul className="dropdown-menu dropdown-menu-media dropdown-menu-end">
								<li className="dropdown-menu-header">
									<div className="dropdown-header d-flex">
										<h4 className="notification-title mb-0 me-auto">Notifications</h4>
										<div className="badge rounded-pill badge-light-primary">6 New</div>
									</div>
								</li>
							</ul>
						</li>

						<li className="nav-item dropdown dropdown-user">
							<a
								className="nav-link dropdown-toggle dropdown-user-link"
								id="dropdown-user"
								href="#"
								data-bs-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								<div className="user-nav d-sm-flex d-none">
									<span className="user-name fw-bolder">Hello World</span>
									<span className="user-status">Admin</span>
								</div>
								<span className="avatar">
									<img
										className="round"
										src="../../../app-assets/images/portrait/small/avatar-s-11.jpg"
										alt="avatar"
										height="40"
										width="40"
									/>
									<span className="avatar-status-online"></span>
								</span>
							</a>
							<div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdown-user">
								<a className="dropdown-item" href="page-profile.html">
									<i className="me-50" data-feather="user"></i> Profile
								</a>
								<a className="dropdown-item" href="app-email.html">
									<ShoppingCart color="#7367F0" size={20} />
								</a>
								<a className="dropdown-item" href="app-todo.html">
									<i className="me-50" data-feather="check-square"></i> Task
								</a>

								<a className="dropdown-item" href="auth-login-cover.html">
									<i className="me-50" data-feather="power"></i> Logout
								</a>
							</div>
						</li>
					</ul>
				</div>
			</nav>
		</>
	)
}

export default Header

import React, { useState, useContext } from "react"
import { ShoppingCart, Bell } from "react-feather"

function Header() {
	return (
		<>
			{/* <!-- BEGIN: Header--> */}
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

						<li class="nav-item dropdown dropdown-user">
							<a
								class="nav-link dropdown-toggle dropdown-user-link"
								id="dropdown-user"
								href="#"
								data-bs-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								<div class="user-nav d-sm-flex d-none">
									<span class="user-name fw-bolder">Hello World</span>
									<span class="user-status">Admin</span>
								</div>
								<span class="avatar">
									<img
										class="round"
										src="../../../app-assets/images/portrait/small/avatar-s-11.jpg"
										alt="avatar"
										height="40"
										width="40"
									/>
									<span class="avatar-status-online"></span>
								</span>
							</a>
							<div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdown-user">
								<a class="dropdown-item" href="page-profile.html">
									<i class="me-50" data-feather="user"></i> Profile
								</a>
								<a class="dropdown-item" href="app-email.html">
									<ShoppingCart color="#7367F0" size={20} />
								</a>
								<a class="dropdown-item" href="app-todo.html">
									<i class="me-50" data-feather="check-square"></i> Task
								</a>

								<a class="dropdown-item" href="auth-login-cover.html">
									<i class="me-50" data-feather="power"></i> Logout
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

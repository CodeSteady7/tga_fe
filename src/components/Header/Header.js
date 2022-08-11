import React, { useState, useContext, useEffect } from "react"
import { ShoppingCart, Bell } from "react-feather"
import User from "services/User"

function Header() {
	const [user, setUser] = useState('')

	const userProfile = async () => {
		await User.getProfile().then(res => {
			setUser(res.data.result)
		}).catch(error => {
			if (error.response.status === 401) {
				localStorage.removeItem("token")
				localStorage.removeItem("role")
				localStorage.removeItem("isLogIn", false)
				window.location.href = "/login"
			}
		})
	}

	useEffect(() => {
	    userProfile()
	}, [])
	
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
							>
								<div className="user-nav d-sm-flex d-none">
									<span className="user-name fw-bolder">Welcome!</span>
									<span className="user-status">{user.name}</span>
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
						</li>
					</ul>
				</div>
			</nav>
		</>
	)
}

export default Header

import React, { useEffect } from "react"
import { NavLink } from "react-router-dom"
import { Home, FileMinus, FilePlus, FileText, User, Image } from "react-feather"
function Navbar({ routes }) {
	let role = localStorage.getItem("role")
	return (
		<>
			<div
				className="main-menu menu-fixed menu-light menu-accordion menu-shadow"
				data-scroll-to-active="true"
			>
				<div className="navbar-header">
					<ul className="nav navbar-nav flex-row">
						<li className="nav-item me-auto">
							<a className="navbar-brand" href="/">
								<h2 className="brand-text">AMI</h2>
							</a>
						</li>
						<li className="nav-item nav-toggle">
							<a className="nav-link modern-nav-toggle pe-0" data-bs-toggle="collapse">
								<i
									className="d-block d-xl-none text-primary toggle-icon font-medium-4"
									data-feather="x"
								></i>
								<i
									className="d-none d-xl-block collapse-toggle-icon font-medium-4 text-primary"
									data-feather="disc"
									data-ticon="disc"
								></i>
							</a>
						</li>
					</ul>
				</div>
				<div className="shadow-bottom"></div>
				<div className="main-menu-content">
					<ul
						className="navigation navigation-main"
						id="main-menu-navigation"
						data-menu="menu-navigation"
					>
						<li className="nav-item">
							{/* {createLinks(routes)} */}
							<a className="d-flex align-items-center" href="/admin">
								{/* <i data-feather="feather" className="text-info"></i> */}
								<Home color="#7367F0" size={48} />
								<span className="menu-title text-truncate" data-i18n="Dashboards">
									Dashboards
								</span>
							</a>
						</li>

						<li className="navigation-header">
							<span data-i18n="Apps &amp; Pages">Apps &amp; Pages</span>
							<i data-feather="more-horizontal"></i>
						</li>

						{role === "admin" ? (
							<>
								<li className="nav-">
									{/* {createApiLinks(routes)} */}
									<a className="d-flex align-items-center" href="/admin/periodeaudit">
										<FileMinus color="#7367F0" size={10} />
										<span className="menu-title text-truncate" data-i18n="Email">
											Periode
										</span>
									</a>
								</li>
								<li className="nav-">
									{/* {createApiLinks(routes)} */}
									<a className="d-flex align-items-center" href="/admin/timaudit">
										<FileMinus color="#7367F0" size={10} />
										<span className="menu-title text-truncate" data-i18n="Email">
											Tim Audit
										</span>
									</a>
								</li>
								<li className="nav-item">
									{/* {createApiLinks(routes)} */}
									<a className="d-flex align-items-center" href="/admin/unit">
										<FilePlus color="#7367F0" size={20} />
										<span className="menu-title text-truncate" data-i18n="Email">
											Unit Kelembagaan
										</span>
									</a>
								</li>
								<li className="nav-item">
									{/* {createApiLinks(routes)} */}
									<a className="d-flex align-items-center" href="/admin/topikinstrumen">
										<FileText color="#7367F0" size={20} />
										<span className="menu-title text-truncate" data-i18n="Email">
											Topik Instrumen
										</span>
									</a>
								</li>
								<li className="nav-item">
									{/* {createApiLinks(routes)} */}
									<a className="d-flex align-items-center" href="/admin/users">
										<User color="#7367F0" size={20} />
										<span className="menu-title text-truncate" data-i18n="Email">
											User
										</span>
									</a>
								</li>

								<li className="nav-item">
									<a className="d-flex align-items-center" href="/admin/addimage">
										<Image color="#7367F0" size={20} />
										<span className="menu-title text-truncate" data-i18n="Email">
											Add Image
										</span>
									</a>
								</li>
							</>
						) : (
							""
						)}

						{role === "auditi" ? (
							<>
								<li className="nav-item">
									{/* {createApiLinks(routes)} */}
									<a className="d-flex align-items-center" href="/admin/addinstrumen">
										<FileText color="#7367F0" size={20} />

										<span className="menu-title text-truncate" data-i18n="Email">
											Mengisi Instrumen
										</span>
									</a>
								</li>
							</>
						) : (
							""
						)}

						{role === "auditor" ? (
							<>
								<li className="nav-item">
									{/* {createApiLinks(routes)} */}
									<a className="d-flex align-items-center" href="/admin/periode">
										<User color="#7367F0" size={20} />

										<span className="menu-title text-truncate" data-i18n="Email">
											Instrumen
										</span>
									</a>
								</li>
								<li className="nav-item">
									{/* {createApiLinks(routes)} */}
									<a className="d-flex align-items-center" href="/admin/periode">
										<FilePlus color="#7367F0" size={20} />

										<span className="menu-title text-truncate" data-i18n="Email">
											Pelaporan
										</span>
									</a>
								</li>
							</>
						) : (
							""
						)}
					</ul>
				</div>
			</div>
			{/* <!-- END: Main Menu--> */}
		</>
	)
}

export default Navbar

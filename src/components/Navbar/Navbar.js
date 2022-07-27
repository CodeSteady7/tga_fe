import React, { useEffect } from "react"
import { NavLink } from "react-router-dom"
import { Home, FileMinus, FilePlus, FileText, User, Image } from "react-feather"
const url = window.location.pathname.split("/")[1]
console.log("🚀 ~ file: Navbar.js ~ line 3 ~ url", url)
function Navbar({ routes }) {
	// useEffect(() => {
	// 	feather.replace()
	// }, [])
	// const createLinks = routes => {
	// 	return routes.map((prop, key) => {
	// 		return (prop.layout === `/${url}` && !prop.api) || prop.use === true ? (
	// 			// <NavLink>
	// 			<a className="d-flex align-items-center" href={prop.layout + prop.path}>
	// 				<i data-feather="home"></i>
	// 				<span className="menu-title text-truncate" data-i18n="Dashboards">
	// 					{prop.name}
	// 				</span>
	// 			</a>
	// 		) : // </NavLink>
	// 		null
	// 	})
	// }

	// const createApiLinks = routes => {
	// 	return routes.map((prop, key) => {
	// 		return prop.layout === `/${url}` && prop.api ? (
	// 			<li className="nav-item">
	// 				<a className="d-flex align-items-center" href={prop.layout + prop.path}>
	// 					<i data-feather="user"></i>
	// 					<span className="menu-title text-truncate" data-i18n="Email">
	// 						{prop.name}
	// 					</span>
	// 				</a>
	// 			</li>
	// 		) : null
	// 	})
	// }

	let getHref = window.location.href
	let split = getHref.split("/")
	let getAdmin = split[3]
	console.log("🚀 ~ file: Navbar.js ~ line 40 ~ Navbar ~ getHref", getHref)
	console.log("getAdmin", getAdmin)
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
								{/* <i data-feather="feather" class="text-info"></i> */}
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

						{getAdmin === "admin" ? (
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
									<a className="d-flex align-items-center" href="/admin/progamstudi">
										<FilePlus color="#7367F0" size={20} />
										<span className="menu-title text-truncate" data-i18n="Email">
											Program Studi
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

						{getAdmin === "auditi" ? (
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

						{getAdmin === "auditor" ? (
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

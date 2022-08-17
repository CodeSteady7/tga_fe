import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Home, FileMinus, FilePlus, FileText, User, Image, LogOut } from 'react-feather';
function Navbar({ routes = '' }) {
	let role = localStorage.getItem('role');

	const handleSignOut = e => {
		localStorage.removeItem('token');
		localStorage.removeItem('role');
		localStorage.removeItem('isLogIn');
		window.location.href = '/login';
	};

	let href = window.location.href;
	console.log('🚀 ~ file: Navbar.js ~ line 15 ~ Navbar ~ href', href);
	// let cutHref = href.split('/');
	// let hrefActive = cutHref[3];

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
						{role === 'admin' ? (
							<>
								<li className="nav-item">
									<NavLink to={'/admin/dashboard'} className="d-flex align-items-center">
										<Home color="#404244" size={10} />
										<span className="menu-title text-truncate">Dashboard</span>
									</NavLink>
								</li>

								<li className="navigation-header">
									<span data-i18n="Apps &amp; Pages">Apps &amp; Pages</span>
									<i data-feather="more-horizontal"></i>
								</li>

								<li className="nav-item">
									<NavLink to={'/admin/users'} className="d-flex align-items-center">
										<User color="#404244" size={10} />
										<span className="menu-title text-truncate">Data User</span>
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink to={'/admin/periods'} className="d-flex align-items-center">
										<FileMinus color="#404244" size={10} />
										<span className="menu-title text-truncate">Data Periode</span>
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink to={'/admin/units'} className="d-flex align-items-center">
										<FilePlus color="#404244" size={10} />
										<span className="menu-title text-truncate">Data Unit Kelembagaan</span>
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink to={'/admin/instruments'} className="d-flex align-items-center">
										<FileText color="#404244" size={10} />
										<span className="menu-title text-truncate">Data Instrumen</span>
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink to={'/admin/audits'} className="d-flex align-items-center">
										<FileMinus color="#404244" size={10} />
										<span className="menu-title text-truncate">Input Data Audit</span>
									</NavLink>
								</li>
							</>
						) : (
							''
						)}

						{role === 'auditee' ? (
							<>
								<li className="nav-item">
									<NavLink to={'/auditee/dashboard'} className="d-flex align-items-center">
										<Home color="#404244" size={10} />
										<span className="menu-title text-truncate">Dashboard</span>
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink to={'/auditee/form-rejected'} className="d-flex align-items-center">
										<FilePlus color="#404244" size={10} />
										<span className="menu-title text-truncate">Daftar Formulir</span>
									</NavLink>
								</li>
							</>
						) : (
							''
						)}

						{role === 'auditor' ? (
							<>
								<li className="nav-item">
									<NavLink to={'/auditor/dashboard'} className="d-flex align-items-center">
										<Home color="#404244" size={10} />
										<span className="menu-title text-truncate">Dashboard</span>
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink to={'/auditor/form-rejected'} className="d-flex align-items-center">
										<FileText color="#404244" size={10} />
										<span className="menu-title text-truncate">Daftar Formulir</span>
									</NavLink>
								</li>
							</>
						) : (
							''
						)}
						{role === 'manager' ? (
							<>
								<li className="nav-item ">
									<NavLink className="d-flex align-items-center" exact to={'/manager/dashboard'}>
										<Home color="#404244" size={20} />
										<span className="menu-title text-truncate  " data-i18n="Email">
											Dashboard
										</span>
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink className="d-flex align-items-center" to={'/manager/laporanaudit'}>
										<FilePlus color="#404244" size={20} />

										<span className="menu-title text-truncate" data-i18n="Email">
											Laporan Audit
										</span>
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink to={'/manager/form-rejected'} className="d-flex align-items-center">
										<FilePlus color="#404244" size={10} />
										<span className="menu-title text-truncate">Laporan Temuan</span>
									</NavLink>
								</li>
							</>
						) : (
							''
						)}
						<li className="nav-item">
							<a className="d-flex align-items-center" onClick={handleSignOut}>
								<LogOut color="#404244" size={10} />
								<span className="menu-title text-truncate">Sign Out</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
			{/* <!-- END: Main Menu--> */}
		</>
	);
}

export default Navbar;

import React from "react"
import Header from "../components/Header/Header"
import Navbar from "../components/Navbar/Navbar"

function Home() {
	return (
		<>
			<Header />
			<Navbar />
			<div
				className="vertical-layout vertical-menu-modern navbar-floating footer-static"
				data-open="click"
				data-menu="vertical-menu-modern"
				data-col=""
			>
				<div className="app-content content ">
					<div className="content-overlay"></div>
					<div className="header-navbar-shadow"></div>
					<div className="content-wrapper container-xxl p-0">
						<div className="content-header row"></div>
						<div className="content-body">
							{/* <!-- Dashboard Ecommerce Starts --> */}
							<section id="dashboard-ecommerce">
								<div className="row match-height">
									{/* <!-- Medal Card --> */}
									<div className="col-xl-12 col-md-12 col-12">
										<div className="card card-congratulation-medal">
											<div className="card-body">
												<h5>Halaman Utama</h5>
												<p className="card-text font-small-3">
													Selamat Datang di sistem Audit Mutu Internal Politeknik Negeri Lhokseumawe
												</p>
											</div>
										</div>
									</div>
									{/* <!--/ Medal Card --> */}
								</div>
							</section>
							{/* <!-- Dashboard Ecommerce ends --> */}
						</div>
					</div>
				</div>
				{/* <!-- END: Content--> */}

				<div className="sidenav-overlay"></div>
				<div className="drag-target"></div>
				{/* <Footer /> */}
			</div>
		</>
	)
}

export default Home

import React from "react"
import LineChart from "components/Charts/LineChart"
import { Calendar } from "react-feather"

import Header from "../components/Header/Header"
import Navbar from "../components/Navbar/Navbar"
function Home() {
	let today = new Date();
	let date = today.toLocaleDateString('en-GB');
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
				<div className="app-content content">
					<div className="content-overlay"></div>
					<div className="header-navbar-shadow"></div>
					<div className="content-wrapper container-xxl p-0">
						<div className="content-header row"></div>
						<div className="content-body">
							<section className="m-0 p-0">
								{/* <!-- Dashboard Ecommerce Starts --> */}
								<div className="row match-height">
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
								</div>
								{/* <!-- Dashboard Ecommerce ends --> */}
								<div class="row">
									{/* <!--Bar Chart Start --> */}
									<div class="col-xl-6 col-12">
										<div class="card">
											<div class="card-header d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column">
												<div class="header-left">
													<h4 class="card-title">Kategori Temuan</h4>
												</div>
												<div class="header-right d-flex align-items-center mt-sm-0 mt-1">
													<Calendar color="#777289" size={15} />
													<input type="text" class="form-control flat-picker border-0 shadow-none bg-transparent pe-0" placeholder={date} disabled />
												</div>
											</div>
											<div class="card-body">
												<LineChart />
											</div>
										</div>
									</div>
									{/* <!-- Bar Chart End --> */}
									{/* <div class="col-xl-6 col-12">
										<div class="card">
											<div class="card-header d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column">
												<div class="header-left">
													<h4 class="card-title">Halaman Utama</h4>
												</div>

											</div>
											<div class="card-body">
												<p className="card-text font-small-3">
													Selamat Datang di sistem Audit Mutu Internal Politeknik Negeri Lhokseumawe
												</p>
											</div>
										</div>
									</div> */}
								</div>
							</section>


						</div>
					</div>
				</div>

				<div className="sidenav-overlay"></div>
				<div className="drag-target"></div>
				{/* <Footer /> */}
			</div>
		</>
	)
}

export default Home

import Header from "components/Header/Header"
import Navbar from "components/Navbar/Navbar"
import React from "react"

function ProgramStudi() {
	return (
		<div>
			<div>
				<body
					class="vertical-layout vertical-menu-modern  navbar-floating footer-static  "
					data-open="click"
					data-menu="vertical-menu-modern"
					data-col=""
				>
					<Header />
					<Navbar />
					<div class="app-content content ">
						<div class="content-overlay"></div>
						<div class="header-navbar-shadow"></div>
						<div class="content-wrapper container-xxl p-0">
							<div class="content-body">
								<section id="multilingual-datatable">
									<div class="row">
										<div class="col-12">
											<div class="card">
												<div class="card-header border-bottom">
													<h4 class="card-title">Data Periode Audit</h4>
												</div>
												<div class="card-datatable">
													<table class="dt-multilingual table">
														<thead>
															<tr>
																<th>No</th>
																<th>Name</th>
																<th>Position</th>
																<th>Email</th>
																<th>Date</th>
																<th>Status</th>
																<th>Action</th>
															</tr>
														</thead>
														<tr>
															<td>1</td>
															<td>Chairul Ikhsan</td>
															<td>CEO</td>
															<td>chairulikhsan2016@gmail.com</td>
															<td>17 Juli 2022</td>
															<td>Aktif</td>
															<td></td>
														</tr>
														<tr>
															<td>1</td>
															<td>Chairul Ikhsan</td>
															<td>CEO</td>
															<td>chairulikhsan2016@gmail.com</td>
															<td>17 Juli 2022</td>
															<td>Aktif</td>
															<td></td>
														</tr>
														<tr>
															<td>1</td>
															<td>Chairul Ikhsan</td>
															<td>CEO</td>
															<td>chairulikhsan2016@gmail.com</td>
															<td>17 Juli 2022</td>
															<td>Aktif</td>
															<td></td>
														</tr>
													</table>
												</div>
											</div>
										</div>
									</div>
								</section>
							</div>
						</div>
					</div>
				</body>
			</div>
		</div>
	)
}

export default ProgramStudi

import Header from "components/Header/Header"
import Navbar from "components/Navbar/Navbar"
import React from "react"
import { Plus } from "react-feather"

function PeriodeAudit() {
	return (
		<>
			<div classNameName="loading">
				<body
					className="vertical-layout vertical-menu-modern  navbar-floating footer-static  "
					data-open="click"
					data-menu="vertical-menu-modern"
					data-col=""
				>
					<Header />
					<Navbar />
					<div className="app-content content ">
						<div className="content-overlay"></div>
						<div className="header-navbar-shadow"></div>

						<div className="content-wrapper container-xxl p-0">
							<div className="content-body">
								<section id="basic-datatable">
									<div className="row">
										<div className="col-12">
											<div className="card">
												<div className="card-header border-bottom">
													<h4 className="card-title">Data Periode Audit</h4>
													<button
														class="btn btn-primary btn-round btn-sm "
														type="button"
														data-bs-target="#modals-slide-in"
														data-bs-toggle="modal"
													>
														<div className="d-flex align-items-center">
															<Plus color="#ffff" size={15} />
															AddImage
														</div>
													</button>
												</div>
												<div className="card-datatable">
													<table className="dt-multilingual table">
														<thead>
															<tr>
																<th></th>
																<th>Name</th>
																<th>Position</th>
																<th>Email</th>
																<th>Date</th>
																<th>Status</th>
																<th>Action</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<th scope="row">1</th>
																<td>Mark</td>
																<td>Otto</td>
																<td>@mdo</td>
																<td>@mdo</td>
																<td>@mdo</td>
																<td>@mdo</td>
															</tr>
															<tr>
																<th scope="row">1</th>
																<td>Mark</td>
																<td>Otto</td>
																<td>@mdo</td>
																<td>@mdo</td>
																<td>@mdo</td>
																<td>@mdo</td>
															</tr>
															<tr>
																<th scope="row">1</th>
																<td>Mark</td>
																<td>Otto</td>
																<td>@mdo</td>
																<td>@mdo</td>
																<td>@mdo</td>
																<td>@mdo</td>
															</tr>
														</tbody>
													</table>
													<nav aria-label="Page navigation example" className="pt-1">
														<ul class="pagination justify-content-center">
															<li class="page-item disabled">
																<a class="page-link" href="#" tabindex="-1" aria-disabled="true">
																	Previous
																</a>
															</li>
															<li class="page-item">
																<a class="page-link" href="#">
																	1
																</a>
															</li>
															<li class="page-item">
																<a class="page-link" href="#">
																	2
																</a>
															</li>
															<li class="page-item">
																<a class="page-link" href="#">
																	3
																</a>
															</li>
															<li class="page-item">
																<a class="page-link" href="#">
																	Next
																</a>
															</li>
														</ul>
													</nav>
												</div>
											</div>
										</div>
									</div>
									{/* <!-- Modal to add new record --> */}
									<div class="modal modal-slide-in fade" id="modals-slide-in">
										<div class="modal-dialog sidebar-sm">
											<form class="add-new-record modal-content pt-0">
												<button
													type="button"
													class="btn-close"
													data-bs-dismiss="modal"
													aria-label="Close"
												>
													×
												</button>
												<div class="modal-header mb-1">
													<h5 class="modal-title" id="exampleModalLabel">
														Tambah Data Periode
													</h5>
												</div>
												<div class="modal-body flex-grow-1">
													<div class="mb-1">
														<label class="form-label" for="basic-icon-default-post">
															Tahun
														</label>
														<input
															type="text"
															id="basic-icon-default-post"
															class="form-control dt-post"
															placeholder="Tahun Periode"
															aria-label="Web Developer"
														/>
													</div>

													<button type="button" class="btn btn-primary data-submit me-1">
														Submit
													</button>
													<button type="reset" class="btn btn-outline-secondary" data-bs-dismiss="modal">
														Cancel
													</button>
												</div>
											</form>
										</div>
									</div>
								</section>
							</div>
						</div>
					</div>
				</body>
			</div>
		</>
	)
}

export default PeriodeAudit

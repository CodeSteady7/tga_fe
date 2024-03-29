import Header from "components/Header/Header"
import Navbar from "components/Navbar/Navbar"
import React from "react"
import { Plus } from "react-feather"

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
																<th>No</th>
																<th>Nama Program Studi</th>
																<th>Nama Kepala Prodi</th>
																<th>Aksi</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<th scope="row">1</th>
																<td>Mark</td>
																<td>Otto</td>
																<td>@mdo</td>
															</tr>
															<tr>
																<th scope="row">1</th>
																<td>Mark</td>
																<td>Otto</td>
																<td>@mdo</td>
															</tr>
														</tbody>
													</table>
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
														Tambah Program Studi
													</h5>
												</div>
												<div class="modal-body flex-grow-1">
													<div class="mb-1">
														<label class="form-label" for="basic-icon-default-post">
															Nama Program Studi
														</label>
														<input
															type="text"
															id="basic-icon-default-post"
															class="form-control dt-post"
															placeholder="Nama Program Studi "
															aria-label="Web Developer"
														/>
													</div>

													<div class="mb-1">
														<label class="form-label" for="basic-icon-default-post">
															Nama Kepala Prodi / Non Akademik
														</label>
														<input
															type="text"
															id="basic-icon-default-post"
															class="form-control dt-post"
															placeholder="Nama Kepala Prodi / Non Akademik "
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
		</div>
	)
}

export default ProgramStudi

import Header from "components/Header/Header"
import Navbar from "components/Navbar/Navbar"
import React from "react"
import { Plus } from "react-feather"

function TimAudit() {
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
													<h4 className="card-title">Tim Audit</h4>
													<button
														class="btn btn-primary btn-round btn-sm "
														type="button"
														data-bs-target="#viewTimAudit"
														data-bs-toggle="modal"
													>
														<div className="d-flex align-items-center">
															<Plus color="#ffff" size={15} />
															Tambah Data
														</div>
													</button>
												</div>
												<div className="card-datatable">
													<table className="dt-multilingual table">
														<thead>
															<tr>
																<th>No</th>
																<th>No. Dok</th>
																<th>Tipe Audit</th>
																<th>Nama Program Studi</th>
																<th>Ruang Lingkup</th>
																<th>Tanggal Audit</th>
																<th>Ketua Auditor</th>
																<th>Aksi</th>
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
																<td>
																	<div className="d-flex">
																		<div className="" style={{ padding: 3 }}>
																			<button
																				class="btn btn-primary btn-round btn-sm "
																				type="button"
																				data-bs-target="#viewTimAudit"
																				data-bs-toggle="modal"
																			>
																				<div className="d-flex align-items-center">
																					<Plus color="#ffff" size={15} />
																					View
																				</div>
																			</button>
																		</div>
																		<div className="" style={{ padding: 3 }}>
																			<button
																				class="btn btn-primary btn-round btn-sm "
																				type="button"
																				data-bs-target="#viewTimAudit"
																				data-bs-toggle="modal"
																			>
																				<div className="d-flex align-items-center">
																					<Plus color="#ffff" size={15} />
																					Edit
																				</div>
																			</button>
																		</div>
																	</div>
																</td>
															</tr>
															<tr>
																<th scope="row">2</th>
																<td>Mark</td>
																<td>Otto</td>
																<td>@mdo</td>
																<td>@mdo</td>
																<td>@mdo</td>
																<td>@mdo</td>
																<td>
																	<div className="d-flex">
																		<div className="" style={{ padding: 3 }}>
																			<button
																				class="btn btn-primary btn-round btn-sm "
																				type="button"
																				data-bs-target="#viewTimAudit"
																				data-bs-toggle="modal"
																			>
																				<div className="d-flex align-items-center">
																					<Plus color="#ffff" size={15} />
																					View
																				</div>
																			</button>
																		</div>
																		<div className="" style={{ padding: 3 }}>
																			<button
																				class="btn btn-primary btn-round btn-sm "
																				type="button"
																				data-bs-target="#viewTimAudit"
																				data-bs-toggle="modal"
																			>
																				<div className="d-flex align-items-center">
																					<Plus color="#ffff" size={15} />
																					Edit
																				</div>
																			</button>
																		</div>
																	</div>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
										</div>
									</div>
									{/* <!-- View Tim Audit Modal --> */}
									<div class="modal fade" id="viewTimAudit" tabindex="-1" aria-hidden="true">
										<div class="modal-dialog modal-lg modal-dialog-centered modal-edit-user">
											<div class="modal-content">
												<div class="modal-header bg-transparent">
													<button
														type="button"
														class="btn-close"
														data-bs-dismiss="modal"
														aria-label="Close"
													></button>
												</div>
												<div class="modal-body pb-5 px-sm-5 pt-50">
													<div class="text-center mb-2">
														<h1 class="mb-1">Tampilan Data Tim Audit</h1>
													</div>
													<form id="viewTimAuditForm" class="row gy-1 pt-75" onsubmit="return false">
														<div class="col-12 col-md-6">
															<label class="form-label" for="modalviewTimAuditFirstName">
																No. Dok
															</label>
															<input
																type="text"
																id="modalviewTimAuditFirstName"
																name="modalviewTimAuditFirstName"
																class="form-control"
																placeholder="John"
																value="Gertrude"
																data-msg="Please enter your first name"
															/>
														</div>
														<div class="col-12 col-md-6">
															<label class="form-label" for="modalviewTimAuditLastName">
																Tipe Audit
															</label>
															<input
																type="text"
																id="modalviewTimAuditLastName"
																name="modalviewTimAuditLastName"
																class="form-control"
																placeholder="Doe"
																value="Barton"
																data-msg="Please enter your last name"
															/>
														</div>
														<div class="col-12 col-md-6">
															<label class="form-label" for="modalviewTimAuditName">
																Standar yang digunakan
															</label>
															<input
																type="text"
																id="modalviewTimAuditName"
																name="modalviewTimAuditName"
																class="form-control"
																value="gertrude.dev"
																placeholder="john.doe.007"
															/>
														</div>
														<div class="col-12 col-md-6">
															<label class="form-label" for="modalviewTimAuditName">
																Nama Program Studi
															</label>
															<input
																type="text"
																id="modalviewTimAuditName"
																name="modalviewTimAuditName"
																class="form-control"
																value="gertrude.dev"
																placeholder="john.doe.007"
															/>
														</div>
														<div class="col-12 col-md-6">
															<label class="form-label" for="modalviewTimAuditEmail">
																Ruang Lingkup
															</label>
															<input
																type="text"
																id="modalviewTimAuditEmail"
																name="modalviewTimAuditEmail"
																class="form-control"
																value="gertrude@gmail.com"
																placeholder="example@domain.com"
															/>
														</div>
														<div class="col-12 col-md-6">
															<label class="form-label" for="modalviewTimAuditStatus">
																Tanggal Audit
															</label>
															<select
																id="modalviewTimAuditStatus"
																name="modalviewTimAuditStatus"
																class="form-select"
																aria-label="Default select example"
															>
																<option selected>Status</option>
																<option value="1">Active</option>
																<option value="2">Inactive</option>
																<option value="3">Suspended</option>
															</select>
														</div>
														<div class="col-12 col-md-6">
															<label class="form-label" for="modalEditTaxID">
																Ketua Auditor
															</label>
															<input
																type="text"
																id="modalEditTaxID"
																name="modalEditTaxID"
																class="form-control modal-edit-tax-id"
															/>
														</div>
														<div class="col-12 col-md-6">
															<label class="form-label" for="modalviewTimAuditCountry">
																Anggota Auditor
															</label>
															<select
																id="modalviewTimAuditCountry"
																name="modalviewTimAuditCountry"
																class="select2 form-select"
															>
																<option value="">Admin</option>
																<option value="Australia">Australia</option>
																<option value="Bangladesh">Bangladesh</option>
															</select>
														</div>
														<div class="col-12 col-md-6">
															<label class="form-label" for="modalEditTaxID">
																Auditee
															</label>
															<input
																type="text"
																id="modalEditTaxID"
																name="modalEditTaxID"
																class="form-control modal-edit-tax-id"
															/>
														</div>
														<div class="col-12 text-center mt-2 pt-50">
															<button type="submit" class="btn btn-primary me-1">
																Submit
															</button>
															<button
																type="reset"
																class="btn btn-outline-secondary"
																data-bs-dismiss="modal"
																aria-label="Close"
															>
																Discard
															</button>
														</div>
													</form>
												</div>
											</div>
										</div>
									</div>
									{/* <!--/ View Tim Audit Modal --> */}
								</section>
							</div>
						</div>
					</div>
				</body>
			</div>
		</div>
	)
}

export default TimAudit

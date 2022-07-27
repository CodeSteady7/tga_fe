import React, { useState } from "react"
import Header from "components/Header/Header"
import Navbar from "components/Navbar/Navbar"
import { Plus } from "react-feather"

function TopikInstrumen() {
	const [show, setShow] = useState(true)

	const tryShow = () => {
		// setShow(false)
		console.log("masuks")
	}
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
								<button class="btn btn-primary btn-round btn-sm " onClick={tryShow}>
									<div className="d-flex align-items-center">
										<Plus color="#ffff" size={15} />
										Views
									</div>
								</button>
								<section id="basic-datatable">
									{show ? (
										<div className="row">
											<div className="col-12">
												<div className="card">
													<div className="card-header border-bottom">
														<h4 className="card-title">Data Topik Instrumen</h4>
														<button
															class="btn btn-primary btn-round btn-sm "
															type="button"
															data-bs-target="#modals-slide-in"
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
																	<th>Nama </th>
																	<th>Periode</th>
																	<th>Aksi</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<th scope="row">1</th>
																	<td>Standar Visi Misi </td>
																	<td>10 November 2021</td>
																	<td>
																		<div className="d-flex">
																			<div className="" style={{ padding: 3 }}>
																				<button class="btn btn-primary btn-round btn-sm ">
																					<div className="d-flex align-items-center">
																						<Plus color="#ffff" size={15} />
																						Views
																					</div>
																				</button>
																			</div>
																		</div>
																	</td>
																</tr>
																<tr>
																	<th scope="row">2</th>
																	<td>Standar Tata Pamong</td>
																	<td>10 November 2021</td>
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
																		</div>
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
											</div>
										</div>
									) : (
										<div class="card">
											<div class="card-header">
												<h4 class="card-title">API Key List & Access</h4>
											</div>
											<div class="card-body">
												<p class="card-text">
													An API key is a simple encrypted string that identifies an application without
													any principal. They are useful for accessing public data anonymously, and are
													used to associate API requests with your project for quota and billing.
												</p>

												<div class="row gy-2">
													<div class="col-12">
														<div class="bg-light-secondary position-relative rounded p-2">
															<div class="dropdown dropstart btn-pinned">
																<button
																	class="btn btn-icon rounded-circle hide-arrow dropdown-toggle p-0"
																	type="button"
																	id="dropdownMenuButton1"
																	data-bs-toggle="dropdown"
																	aria-expanded="false"
																>
																	<i data-feather="more-vertical" class="font-medium-4"></i>
																</button>
																<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
																	<li>
																		<a class="dropdown-item d-flex align-items-center" href="#">
																			<i data-feather="edit-2" class="me-50"></i>
																			<span>Edit</span>
																		</a>
																	</li>
																	<li>
																		<a class="dropdown-item d-flex align-items-center" href="#">
																			<i data-feather="trash-2" class="me-50"></i>
																			<span>Delete</span>
																		</a>
																	</li>
																</ul>
															</div>
															<div class="d-flex align-items-center flex-wrap">
																<h4 class="mb-1 me-1">Server Key 1</h4>
																<span class="badge badge-light-primary mb-1">Full Access</span>
															</div>
															<h6 class="d-flex align-items-center fw-bolder">
																<span class="me-50">23eaf7f0-f4f7-495e-8b86-fad3261282ac</span>
																<span>
																	<i data-feather="copy" class="font-medium-4 cursor-pointer"></i>
																</span>
															</h6>
															<span>Created on 28 Apr 2021, 18:20 GTM+4:10</span>
														</div>
													</div>
													<div class="col-12">
														<div class="bg-light-secondary position-relative rounded p-2">
															<div class="dropdown dropstart btn-pinned">
																<button
																	class="btn btn-icon rounded-circle hide-arrow dropdown-toggle p-0"
																	type="button"
																	id="dropdownMenuButton2"
																	data-bs-toggle="dropdown"
																	aria-expanded="false"
																>
																	<i data-feather="more-vertical" class="font-medium-4"></i>
																</button>
																<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
																	<li>
																		<a class="dropdown-item d-flex align-items-center" href="#">
																			<i data-feather="edit-2" class="me-50"></i>
																			<span>Edit</span>
																		</a>
																	</li>
																	<li>
																		<a class="dropdown-item d-flex align-items-center" href="#">
																			<i data-feather="trash-2" class="me-50"></i>
																			<span>Delete</span>
																		</a>
																	</li>
																</ul>
															</div>
															<div class="d-flex align-items-center flex-wrap">
																<h4 class="mb-1 me-1">Server Key 2</h4>
																<span class="badge badge-light-primary mb-1">Read Only</span>
															</div>
															<h6 class="d-flex align-items-center fw-bolder">
																<span class="me-50">bb98e571-a2e2-4de8-90a9-2e231b5e99</span>
																<span>
																	<i data-feather="copy" class="font-medium-4 cursor-pointer"></i>
																</span>
															</h6>
															<span>Created on 12 Feb 2021, 10:30 GTM+2:30</span>
														</div>
													</div>
													<div class="col-12">
														<div class="bg-light-secondary position-relative rounded p-2">
															<div class="dropdown dropstart btn-pinned">
																<button
																	class="btn btn-icon rounded-circle hide-arrow dropdown-toggle p-0"
																	type="button"
																	id="dropdownMenuButton3"
																	data-bs-toggle="dropdown"
																	aria-expanded="false"
																>
																	<i data-feather="more-vertical" class="font-medium-4"></i>
																</button>
																<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton3">
																	<li>
																		<a class="dropdown-item d-flex align-items-center" href="#">
																			<i data-feather="edit-2" class="me-50"></i>
																			<span>Edit</span>
																		</a>
																	</li>
																	<li>
																		<a class="dropdown-item d-flex align-items-center" href="#">
																			<i data-feather="trash-2" class="me-50"></i>
																			<span>Delete</span>
																		</a>
																	</li>
																</ul>
															</div>
															<div class="d-flex align-items-center flex-wrap">
																<h4 class="mb-1 me-1">Server Key 3</h4>
																<span class="badge badge-light-primary mb-1">Full Access</span>
															</div>
															<h6 class="d-flex align-items-center fw-bolder">
																<span class="me-50">2e915e59-3105-47f2-8838-6e46bf83b711</span>
																<span>
																	<i data-feather="copy" class="font-medium-4 cursor-pointer"></i>
																</span>
															</h6>
															<span>Created on 28 Apr 2021, 12:21 GTM+4:10</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									)}

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
														Tambah Data
													</h5>
												</div>
												<div class="modal-body flex-grow-1">
													<div class="mb-1">
														<label class="form-label" for="basic-icon-default-post">
															Nama
														</label>
														<input
															type="text"
															id="basic-icon-default-post"
															class="form-control dt-post"
															placeholder="Nama "
															aria-label="Web Developer"
														/>
													</div>

													<div class="mb-1">
														<label class="form-label" for="basic-icon-default-post">
															Periode
														</label>
														<select class="hide-search form-select" id="select2-hide-search">
															<option value="romboid">2022/2023</option>
															<option value="trapeze" selected>
																2021/2022
															</option>
															<option value="triangle">2020/2021</option>
														</select>
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

export default TopikInstrumen

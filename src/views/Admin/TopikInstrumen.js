import React, { useState } from "react"
import Header from "components/Header/Header"
import Navbar from "components/Navbar/Navbar"
import { Plus } from "react-feather"

function TopikInstrumen() {
	const [show, setShow] = useState(true)

	const tryShow = () => {
		setShow(false)
		// console.log("masuks")
	}

	const tryShowTrue = () => {
		setShow(true)
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
																				<button class="btn btn-primary btn-round btn-sm " onClick={tryShow}>
																					<div className="d-flex align-items-center">
																						<Plus color="#ffff" size={15} />
																						View
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
																				<button class="btn btn-primary btn-round btn-sm " onClick={tryShow}>
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
												<h4 class="card-title">Pertanyaan</h4>
												<div className="d-flex">
													<div className="" style={{ padding: 3 }}>
														<button
															class="btn btn-primary btn-round btn-sm "
															onClick={tryShowTrue}
															type="button"
														>
															<div className="d-flex align-items-center">Back</div>
														</button>
													</div>
													<div className="" style={{ padding: 3 }}>
														<button
															class="btn btn-primary btn-round btn-sm "
															onClick={tryShowTrue}
															type="button"
														>
															<div className="d-flex align-items-center">Tambah Pertanyaan</div>
														</button>
													</div>
												</div>
											</div>
											<div class="card-body">
												<div class="row gy-2">
													<div class="col-12">
														<div class="bg-light-secondary position-relative rounded p-2">
															<div class="d-flex align-items-center flex-wrap">
																<ol>
																	<h4>Visi Misi</h4>
																	<li class="align-items-center fw-bolder p-1">
																		Apakah UPPS memiliki visi, misi, tujuan, dan sasaran (VMTS) yang telah
																		diverifikasi, divalidasi, disosialisasi, dan dipahami oleh staf.
																	</li>
																	<li class="align-items-center fw-bolder p-1">
																		Apakah VMTS telah diimplementasi dan dievaluasi, dan upaya perbaikan yang telah
																		dilakukan ?
																	</li>
																</ol>
															</div>
															<h6 class="d-flex align-items-center fw-bolder">
																<span class="me-50"></span>
															</h6>
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

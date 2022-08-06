import Header from "components/Header/Header"
import Navbar from "components/Navbar/Navbar"
import React from "react"
import { Plus } from "react-feather"
import List from "./TimAudit/List"
import ModalCreate from "./TimAudit/ModalCreate"

function TimAudit() {
	return (
		<div>
			<div>
				<div
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
													<h4 className="card-title">Tim Audit</h4>
													<button
														className="btn btn-primary btn-round btn-sm "
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
												<List />
											</div>
										</div>
									</div>
									<ModalCreate />
									{/* <!--/ View Tim Audit Modal --> */}
								</section>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TimAudit

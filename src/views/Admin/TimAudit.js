import Header from "components/Header/Header"
import Navbar from "components/Navbar/Navbar"
import React, { useState, useEffect } from "react"
import { Plus } from "react-feather"
import Audit from "services/Audit"
import List from "./TimAudit/List"
import Modal from "./TimAudit/Modal"



function TimAudit() {
    const [isOpen, setIsOpen] = useState(false)
	const [audits, setAudits] = useState([]) 
	
	const getAudits = async () => {
		await Audit.getAll().then(res => {
			setAudits(res.data.result)
		}).catch(err => {
			
		})
	}

	useEffect(() => {
		getAudits()
	}, [])
	
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
														onClick={() => setIsOpen(true)}
													>
														<div className="d-flex align-items-center">
															<Plus color="#ffff" size={15} />
															Tambah Data
														</div>
													</button>
												</div>
												<List audits={audits} />
											</div>
										</div>
									</div>
									<Modal isOpen={isOpen} setIsOpen={setIsOpen} fecthDataAudit={getAudits} />
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

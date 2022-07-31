import Header from "components/Header/Header"
import Navbar from "components/Navbar/Navbar"
import React, { useEffect, useState } from "react"
import { format } from 'date-fns';
import { Plus, RefreshCw, Trash } from "react-feather"
import Period from "../../services/Period.js"
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Modal } from "bootstrap";

export default function PeriodeAudit() {
	const [periods, setPeriods] = useState([])
	const [period, setPeriod] = useState()
	const [periodStart, setPeriodStart] = useState()
	const [periodEnd, setPeriodEnd] = useState()
	const [isOpen, setIsOpen]	= useState(false)

	const fetchPeriods = async () => {
		await Period.getAll().then((response) => {
			setPeriods(response.data.result)
		}).catch(error => {
			console.log(error)
		})
	}

	const submitCreate = async (e) => {
		e.preventDefault()

		let data = {
			name: period,
			period_start: periodStart,
			period_end: periodEnd
		}

		await Period.create(data).then((response) => {
			fetchPeriods()
			setIsOpen(false)
		})
	}

	const handleCreate = () => {

	}

	const handleEdit = () => {

	}

	const handleDelete = () => {

	}

	useEffect(() => {
		fetchPeriods()
	}, []);

	return (
		<>
			<div className="loading">
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
														className="btn btn-primary btn-round btn-sm "
														type="button"
														data-bs-toggle="modal"
														onClick={() => setIsOpen(true)}
													>
														<div className="d-flex align-items-center">
															<Plus color="#ffff" size={15} />
															Add Period
														</div>
													</button>
												</div>
												<div className="card-datatable">
													<table className="dt-multilingual table">
														<thead>
															<tr>
																<th></th>
																<th>Description</th>
																<th>Period Time</th>
																<th>Created At</th>
																<th>Updated At</th>
																<th>Action</th>
															</tr>
														</thead>
														<tbody>
															{periods.map((data, i) => {
																return (
																	<tr key={data.id}>
																		<td key={data.id}>{i+1}</td>
																		<td>{data.name}</td>
																		<td>
																			{format(new Date(data.period_start), 'dd-MM-yyyy')}
																			- 
																			{format(new Date(data.period_end), 'dd-MM-yyyy')}
																		</td>
																		<td>{format(new Date(data.created_at), 'HH:ii, dd-MM-yyyy')}</td>
																		<td>{format(new Date(data.updated_at), 'HH:ii, dd-MM-yyyy')}</td>
																		<td>
																			<button className="btn btn-success mx-1">
																				<RefreshCw color="#ffff" size={15} />
																			</button>
																			<button className="btn btn-danger mx-1">
																				<Trash color="#ffff" size={15} />
																			</button>
																		</td>
																	</tr>
																)
															})}
														</tbody>
													</table>
												</div>
											</div>
										</div>
									</div>
									
									{/* <!-- Modal to add new record --> */}
									<div className={`modal modal-slide-in fade ${isOpen ? 'show' : ''}`} style={{display: isOpen ? 'block' : 'none'}} id="modals-slide-in">
										<div className="modal-dialog sidebar-sm">
											<form className="add-new-record modal-content pt-0" >
												<button
													type="button"
													className="btn-close"
													aria-label="Close"
													onClick={() => setIsOpen(true)}
												>
													×
												</button>
												<div className="modal-header mb-1">
													<h5 className="modal-title" id="exampleModalLabel">
														Tambah Data Periode
													</h5>
												</div>
												<div className="modal-body flex-grow-1">
													<div className="mb-1">
														<label className="form-label" for="basic-icon-default-post">
															periode
														</label>
														<input
															type="text"
															id="basic-icon-default-post"
															className="form-control dt-post"
															placeholder="Tahun Periode"
															aria-label="Web Developer"
															onChange={(e) => setPeriod(e.target.value)}
														/>
													</div>
													<div className="mb-1">
														<label>
															Periode Awal
														</label>
														<ReactDatePicker 
															className="form-control"
															selected={periodStart} 
															onChange={(date) => setPeriodStart(date)}  />
													</div>
													<div className="mb-1">
														<label>
															Periode Akhir
														</label>
														<ReactDatePicker 
															className="form-control"
															selected={periodEnd} 
															onChange={(date) => setPeriodEnd(date)}  />
													</div>

													<button type="button" className="btn btn-primary data-submit me-1" onClick={(e) => submitCreate(e)} >
														Submit
													</button>
													<button type="reset" className="btn btn-outline-secondary" onClick={() => setIsOpen(false)}>
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
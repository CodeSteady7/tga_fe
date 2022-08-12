import React, { useEffect, useState } from "react"
import Navbar from "../components/Navbar/Navbar"
import Header from "../components/Header/Header"
import Select from "react-select"
import Period from "services/Period"
import { Link } from "react-router-dom"
import Audit from "services/Audit"
import { format } from "date-fns"
import HTMLReactParser from "html-react-parser"
import AuditLib from "components/Library/AuditLib"

export default function Auditor() {
	const [periodOption, setPeriodOption] = useState([])
    const [period, setPeriod] = useState('')
	const [audits, setAudits] = useState([]) 
	const [isOpen, setIsOpen] = useState(false)

	const getPeriods = async () => {
		await Period.getAll()
		.then((response) => {
			const periods = response.data.result.map((prop, index) => {
				return {
					value: prop.id,
					label: `Periode ${prop.name}`
				}
			})

			setPeriodOption(periods)

		}).catch((error) => {
			
		});
	}

	const getAudits = async (params) => {
		await Audit.getAll(params).then(res => {
			setAudits(res.data.result)
		}).catch(err => {
			
		})
	}

	const handleSelectPeriod = (event) => {
		let params = {
			period_id: event.value,
			pagination: 0
		}

		getAudits(params)

	}

	const formattedStatus = (date, status) => {
		let auditStatus = AuditLib.auditStatus(status)
		let isOpen 		= AuditLib.isOpen(date)

		return HTMLReactParser(AuditLib.formattedText(isOpen, auditStatus))
	}
	

	const handleDetail = (event) => {
		setIsOpen(true)
	}

	useEffect(() => {
        getPeriods()
    }, [])
	return (
		<>
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
											<h4 className="card-title">Daftar Instrumen</h4>
										</div>
										<div className="card-body pt-2">
											<div className="row">
												<label className="form-label" htmlFor="basic-icon-default-post">
													Cari Berdasarkan Periode
												</label>
												<div className="col-4">
													<Select 
														options={periodOption}
														onChange={handleSelectPeriod}
													/>
												</div>
												
											</div>
										</div>
										<div className="card-datatable">
											<table className="dt-multilingual table">
												<thead>
													<tr>
														<th>No</th>
														<th>No. Dok</th>
														<th>Tipe Audit</th>
														<th>Tanggal Audit</th>
														<th>Ketua Auditor</th>
														<th>Status</th>
														<th>Aksi</th>
													</tr>
												</thead>
												<tbody>

													{typeof audits !== 'undefined' && audits.length > 0 
													? audits.map((prop, index) => {
														return (
															<tr key={index}>
																<td>{index + 1} </td>
																<td>{prop.document_no} </td>
																<td>{prop.audit_type}</td>
																<td>{format(new Date(prop.audit_at), "dd-MM-yyyy")}</td>
																<td>{prop.auditor.name}</td>
																<td>{ formattedStatus(prop.audit_at, prop.audit_status) }</td>
																<td><div className="dropdown">
																		<a
																			type="button"
																			className="btn btn-sm dropdown-toggle hide-arrow py-0"
																			data-bs-toggle="dropdown"
																			id="dropdownMenuLink"
																			aria-expanded="false"
																		>
																			<i data-feather="more-vertical">
																				Click
																			</i>
																		</a>
																		<div
																			className="dropdown-menu dropdown-menu-end"
																			aria-labelledby="dropdownMenuLink"
																		>
																			{AuditLib.isAuditorMenuShown(prop.audit_status) ? (
																				<Link
																					className="dropdown-item"
																					to={`/auditor/form-approval/${prop.id}`}
																				>
																					<span>Lakukan Approval </span>
																				</Link>
																			) : ''}
																		</div>
																	</div></td>
															</tr>
														)
													})  
													: <tr>
														<td colSpan={7} align="center"> -- Belum Tersedia --</td>
													</tr>
													}
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</>
	)	
}

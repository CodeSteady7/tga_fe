import Header from "components/Header/Header"
import Navbar from "components/Navbar/Navbar"
import React, { useEffect, useState } from "react"
import { Plus, RefreshCw, Trash } from "react-feather"
import Period from "../../services/Period.js"
import "react-datepicker/dist/react-datepicker.css"
import List from "./Period/List.js"
import Modal from "./Period/Modal.js"

export default function PeriodeAudit() {
	const [isOpen, setIsOpen] = useState(false)
	const [periods, setPeriods] = useState([])
	
	const [period, setPeriod] = useState("")
	const [update, setUpdate] = useState(false)
	const [nampungData, setNampungData] = useState("")

	const fetchPeriods = async () => {
		await Period.getAll()
			.then(response => {
				setPeriods(response.data.result)
			})
			.catch(error => {
			})
	}

	const handleCreate = async e => {
		e.preventDefault()

		let data = {
			name: period,
		}

		await Period.create(data).then(response => {
			fetchPeriods()
			setIsOpen(false)
		})
	}

	const handleOnEdit = async e => {
		e.preventDefault()

		if (period === "" && periodStart === "" && periodEnd === "") {
			alert("harap di isi")
		}

		let data = {
			id: nampungData.id,
			name: period,
		}
		await Period.update(data)
			.then(response => {
				fetchPeriods()
				setIsOpen(false)
				setUpdate(false)
				console.log("response", response)
			})
			.catch(error => console.log("error", error))
	}

	const handleEdit = async (data, e) => {
		try {
			e.preventDefault()
			setUpdate(true)
			setIsOpen(true)
			setNampungData(data)

		} catch (error) {}
	}

	const handleClose = () => {
		setUpdate(false)
		setIsOpen(false)
	}

	const handleDelete = async (data, e) => {
		try {
			const datas = {
				id: data.id,
			}
			console.log("masuk data", datas)
			let info = await Period.destroy(datas)
				.then(response => {
					console.log("response", response)
					fetchPeriods()
					setIsOpen(false)
				})
				.catch(error => console.log("=>", error))
		} catch (error) {
		}
	}

	useEffect(() => {
		fetchPeriods()
	}, [])

	return (
		<>
			<div className="loading">
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
													<h4 className="card-title">Data Periode</h4>
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
												<List periods={periods} handleEdit={handleEdit} handleDelete={handleDelete} />
											</div>
										</div>
									</div>
								</section>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Modal isOpen={isOpen} nampungData={nampungData} setIsOpen={setIsOpen} update={update} setPeriod={setPeriod} handleOnEdit={handleOnEdit} handleCreate={handleCreate} handleClose={handleClose} />
		</>
	)
}

import Header from "components/Header/Header"
import Navbar from "components/Navbar/Navbar"
import React, { useEffect, useState } from "react"
import { Plus } from "react-feather"
import Unit from "services/Unit"
import User from "services/User"
import List from "./Unit/List"
import Modal from "./Unit/Modal"

function UnitLembaga() {
	const [units, setUnits] = useState([])
	const [input, setInput] = useState({
		level: '',
		name: '',
		user_id: '',
		type: 'academic'
	})
	const [isOpen, setIsOpen] = useState(false)

	const [levelOptions, setLevelOptions] = useState([
		{ value: 'D1', label: 'D1' },
		{ value: 'D2', label: 'D2' },
		{ value: 'D3', label: 'D3' },
		{ value: 'D4', label: 'D4' },
		{ value: '' , label: '-- Tidak Ada Jenjang --' }
	])
	
	const [userOptions, setUserOptions] = useState([])
	const [validation, setValidation] = useState('')

	const getUsers = async () => {
		let params = {
			role: 'auditee',
			pagination: 0
		}
		await User.getAll(params).then(res => {
			let options = res.data.result.map((prop, index) => {
				return {
					value: prop.id,
					label: `${prop.name}: ${prop.email}`
				}
			})
	
			setUserOptions(options)	
		}).catch(error => {
			
		})
	}

	const submitCreate = async e => {
		e.preventDefault()
		console.log(input)
		await Unit.create(input).then((response) => {
			setInput({
				level: '',
				name: '',
				user_id: '',
				type: 'academic'
			})
			setIsOpen(false)
			getUnits()
		}).catch(error => {
			console.log(error)
			setValidation(error.response.data);
		})
	}

	const mappingUserOption = () => {
		
	}
	
	const getUnits = async (params = {}) => {
		await Unit.getAll(params).then(res => {
			setUnits(res.data.result)
		}).catch(error => {
			
		})
	}

	const paginationLink = (e) => {
		let params = {
			page: e.target.getAttribute('data-page')
		}
		getUnits(params)
	}

	useEffect(() => {
		getUnits()
		getUsers()
	},[])

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
													<h4 className="card-title">Data Unit Lembaga</h4>
													<button
														className="btn btn-primary btn-round btn-sm "
														type="button"
														onClick={() => setIsOpen(true)}
													>
														<div className="d-flex align-items-center">
															<Plus color="#ffff" size={15} />
															Add Unit
														</div>
													</button>
												</div>
												<List units={units} paginationLink={paginationLink} />
											</div>
										</div>
									</div>
								</section>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Modal isOpen={isOpen} setIsOpen={setIsOpen} validation={validation} input={input} setInput={setInput} userOptions={userOptions} levelOptions={levelOptions} submitCreate={submitCreate} getUnits={getUnits}/>
		</div>
	)
}

export default UnitLembaga

import axios from "axios"
import Header from "components/Header/Header"
import Navbar from "components/Navbar/Navbar"
import React, { useEffect, useState } from "react"
import { Plus } from "react-feather"
import Select from 'react-select'
import Unit from "services/Unit"
import User from "services/User"

function UnitLembaga() {
	const [users, setUsers] = useState([])
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

	const getUsers = async (params) => {
		await User.getAll(params).then(res => {
			setUsers(res.data.result.data)
		}).catch(error => {
			
		})
	}

	const submitCreate = async e => {
		e.preventDefault()
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

	const filterUserOptions = e => {
		let params = {
			role: 'auditee',
			page: 1,
			keyword: e
		}

		getUsers(params)
		mappingUserOption()
	}

	const mappingUserOption = () => {
		let options = users.map((prop, index) => {
			return {
				value: prop.id,
				label: `${prop.name}: ${prop.email}`
			}
		})

		setUserOptions(options)
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
		let params = {
			role: 'auditee',
			page: 1
		}
		getUnits()
		getUsers(params)
		mappingUserOption()
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
													<h4 className="card-title">Data Periode Audit</h4>
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
												<div className="card-datatable">
													<table className="dt-multilingual table">
														<thead>
															<tr>
																<th>No</th>
																<th>Nama Lembaga</th>
																<th>Jenjang</th>
																<th>Kepala Lembaga</th>
																<th>Aksi</th>
															</tr>
														</thead>
														<tbody>
														{typeof units.data != "undefined" ? units.data.map((prop, key) => {
															return (
																<tr key={key}>
																	<td>{units.from++}</td>
																	<td>{prop.scope_type === 'academic' ? 'Akademik' : 'Non Akademik'} : {prop.name}</td>
																	<td>{prop.level ?? '-'}</td>
																	<td>{prop.user.name}</td>
																	<td>
																		<div className="dropdown">
																			<a
																				type="button"
																				className="btn btn-sm dropdown-toggle hide-arrow py-0"
																				data-bs-toggle="dropdown"
																				id="dropdownMenuLink"
																				aria-expanded="false"
																			>
																				<i data-feather="more-vertical">Click</i>
																			</a>
																			<div
																				className="dropdown-menu dropdown-menu-end"
																				aria-labelledby="dropdownMenuLink"
																			>
																				<a className="dropdown-item" href="#">
																					<i data-feather="edit-2" className="me-50"></i>
																					<span>Edit</span>
																				</a>
																				<a className="dropdown-item" href="#">
																					<i data-feather="trash" className="me-50"></i>
																					<span>Delete</span>
																				</a>
																			</div>
																		</div>
																	</td>
																</tr>
															)
															}) : ''
														}
														</tbody>
													</table>
													<nav aria-label="Page navigation example" className="pt-1">
														<ul className="pagination justify-content-center">
															{typeof units.links != "undefined" ? units.links.map((prop, index) => {
																return (
																	<li key={index} className={`page-item ${prop.active ? 'active' : ''}`} tabIndex="-1">
																		<a className="page-link" data-page={`${prop.url !== null ? prop.url.split('=')[1] : null}`} onClick={e => paginationLink(e)} >
																			{prop.label}
																		</a>
																	</li>
																)
															}) : ''}
														</ul>
													</nav>
												</div>
											</div>
										</div>
									</div>
									{/* <!-- Modal to add new record --> */}
									<div className={`modal modal-slide-in fade ${isOpen ? 'show' : ''}`} style={{display: isOpen ? 'block' : 'none'}} id="modals-slide-in">
										<div className="modal-dialog sidebar-sm">
											<form className="add-new-record modal-content pt-0">
												<button
													type="button"
													className="btn-close"
													onClick={() => setIsOpen(false)}
												>
													×
												</button>
												<div className="modal-header mb-1">
													<h5 className="modal-title" id="exampleModalLabel">
														Tambah Unit Kelembagaan
													</h5>
												</div>
												{
													validation.message && (
														<div className="alert alert-danger">
															{validation.message}
														</div>
													)
												}
												<div className="modal-body flex-grow-1">
													<div className="mb-1">
														<label className="form-label" htmlFor="basic-icon-default-post">
															Nama Unit
														</label>
														<input
															type="text"
															id="basic-icon-default-post"
															className="form-control dt-post"
															placeholder="Nama Unit "
															aria-label="Web Developer"
															onChange={e => setInput({...input, name: e.target.value})}
														/>
													</div>

													<div className="mb-1">
														<label className="form-label" htmlFor="basic-icon-default-post">
															Jenjang
														</label>
														<Select 
															options={levelOptions} 
															defaultValue={levelOptions[levelOptions.findIndex(level => level.value == "")]} 
															onChange={e => setInput({...input, level: e.value})}
														/>
													</div>

													<div className="mb-1">
														<label className="form-label" htmlFor="basic-icon-default-post">
															Nama kepala Unit
														</label>
														<Select
															options={userOptions}
															onInputChange={e => filterUserOptions(e)}
															autoFocus={true}
															onChange={e => setInput({...input, user_id: e.value})}
														/>
														
													</div>

													<div className="mb-1">
														<label className="form-label" htmlFor="basic-icon-default-post">
															Tipe Unit
														</label>
														<div className="table-responsive">
														<table className="table table-flush-spacing">
															<tbody>
																<tr>
																	<td>
																		<div className="d-flex">
																			<div className="form-check me-3 me-lg-5">
																				<input
																					className="form-check-input"
																					type="radio"
																					name="type"
																					onChange={e => setInput({...input, type: e.target.value})}
																					defaultChecked
																					value="academic"
																				/>
																				<label className="form-check-label" htmlFor="userManagementRead">
																					{" "}
																					Akademik{" "}
																				</label>
																			</div>
																			<div className="form-check me-3 me-lg-5">
																				<input
																					className="form-check-input"
																					type="radio"
																					name="type"
																					onChange={e => setInput({...input, type: e.target.value})}
																					value="non_academic"
																				/>
																				<label className="form-check-label" htmlFor="userManagementWrite">
																					{" "}
																					Non Akademik{" "}
																				</label>
																			</div>
																		</div>
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
													</div>

													<button type="button" className="btn btn-primary data-submit me-1" onClick={e => submitCreate(e)}>
														Submit
													</button>
													<button type="reset" className="btn btn-outline-secondary"  onClick={() => setIsOpen(false)}>
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
				</div>
			</div>
		</div>
	)
}

export default UnitLembaga

import React, {
	useContext,
	useEffect,
	useState,
} from "react"
import { Navigate } from "react-router-dom"
import User from "services/User"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Navbar from "../components/Navbar/Navbar"

function Users() {
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
		role: "",
		nip: "",
		repassword: "",
	})

	const [isOpen, setIsOpen] =
		useState(false)
	const [validation, setValidation] =
		useState([])
	const [users, setUsers] = useState([])

	let manager = 0
	let auditor = 0
	let prodi = 0
	let nonakademik = 0

	const onChangeInput = e => {
		const { name, value } = e.target
		console.log(name, value)
		setUser({ ...user, [name]: value })
	}

	const getUsers = async () => {
		await User.getAll()
			.then(response => {
				setUsers(response.data.result)
			})
			.catch(error => {
				if (error.response.status === 401) {
					localStorage.removeItem("token")
					localStorage.removeItem("role")
					localStorage.removeItem(
						"isLogIn",
						false
					)
					window.location.href = "/login"
				}
			})
	}
	const handleSubmit = async e => {
		e.preventDefault()
		await User.create(user)
			.then(response => {
				setUser({
					name: "",
					email: "",
					password: "",
					respassword: "",
					role: "",
					nip: "",
				})
				setIsOpen(false)
				getUsers()
			})
			.catch(error => {
				setValidation(error.response.data)
			})
	}

	useEffect(() => {
		getUsers()
	}, [])

	return (
		<>
			<Header />
			<Navbar />
			<div
				class="vertical-layout vertical-menu-modern navbar-floating footer-static"
				data-open="click"
				data-menu="vertical-menu-modern"
				data-col=""
			>
				<div
					className="app-content content "
					style={{
						MarginBottom: "30px !important",
					}}
				>
					<div className="content-overlay"></div>
					<div className="header-navbar-shadow"></div>
					<div className="content-wrapper container-xxl p-0">
						<div className="content-header row"></div>
						<div className="content-body">
							<h3>Users List</h3>
							{/* <!-- Role cards --> */}
							<div className="row">
								<div className="col-xl-4 col-lg-6 col-md-6">
									<div className="card pb-2">
										<div className="card-body">
											<div className="d-flex justify-content-between">
												<span>
													Total <strong>{manager} </strong> users
													Manager
												</span>
											</div>
											<div className="d-flex justify-content-between align-items-end mt-1 pt-25">
												<div className="role-heading">
													<h4 className="fw-bolder">Manager</h4>
													<a
														href="javascript:;"
														className="role-edit-modal"
														data-bs-toggle="modal"
														data-bs-target="#addRoleModal"
													></a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-4 col-lg-6 col-md-6">
									<div className="card pb-2">
										<div className="card-body">
											<div className="d-flex justify-content-between">
												<span>
													Total <strong> {auditor} </strong> users
													Auditor
												</span>
											</div>
											<div className="d-flex justify-content-between align-items-end mt-1 pt-25">
												<div className="role-heading">
													<h4 className="fw-bolder">Auditor</h4>
													<a
														href="javascript:;"
														className="role-edit-modal"
														data-bs-toggle="modal"
														data-bs-target="#addRoleModal"
													></a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-4 col-lg-6 col-md-6">
									<div className="card">
										<div className="card-body">
											<div className="d-flex justify-content-between">
												<span>
													Total <strong> {prodi} </strong> users
													Prodi
												</span>
											</div>
											<div className="d-flex justify-content-between align-items-end mt-1 pt-25">
												<div className="role-heading">
													<h4 className="fw-bolder">
														Unit Penunjang
													</h4>
													<h6 className="fw-bolder">Prodi</h6>
													<a
														href="javascript:;"
														className="role-edit-modal"
														data-bs-toggle="modal"
														data-bs-target="#addRoleModal"
													></a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-4 col-lg-6 col-md-6">
									<div className="card">
										<div className="card-body">
											<div className="d-flex justify-content-between">
												<span>
													Total <strong> {nonakademik}</strong>{" "}
													users Non Akademik
												</span>
											</div>
											<div className="d-flex justify-content-between align-items-end mt-1 pt-25">
												<div className="role-heading">
													<h4 className="fw-bolder">
														Unit Penunjang
													</h4>
													<h6 className="fw-bolder">
														Non Akademik
													</h6>
													<a
														href="javascript:;"
														className="role-edit-modal"
														data-bs-toggle="modal"
														data-bs-target="#addRoleModal"
													></a>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="col-xl-4 col-lg-6 col-md-6 ">
									<div className="card ">
										<div className="row">
											<div className="col-sm-5">
												<div className="d-flex align-items-end justify-content-center h-100">
													<img
														src="../../../app-assets/images/illustration/faq-illustrations.svg"
														className="img-fluid mt-0"
														alt="Image"
														width="80"
													/>
												</div>
											</div>
											<div className="col-sm-7">
												<div className="card-body text-sm-end text-center ps-sm-0">
													<a
														// href="javascript:void(0)"
														// data-bs-target="#addRoleModal"
														// data-bs-toggle="modal"
														onClick={() => setIsOpen(true)}
														className="stretched-link text-nowrap add-new-role"
													>
														<span className="btn btn-primary mb-1">
															Klik
														</span>
													</a>
													<p className="mb-1">
														Tambahkan Users Baru
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* <!--/ Role cards --> */}

							<h3 className="mt-50">
								List Keseleruhan Users
							</h3>

							<div className="card ">
								<div className="table-responsive">
									<table className="user-list-table table">
										<thead className="table-light">
											<tr>
												<th>#</th>
												<th>Name</th>
												<th>Nip</th>
												<th>Role</th>
												<th>Actions</th>
											</tr>
										</thead>
										<tbody>
											{typeof users.data != "undefined"
												? users.data.map((prop, key) => {
														return (
															<tr key={key}>
																<td>{key + 1}</td>
																<td>{prop.name}</td>
																<td>{prop.nip}</td>
																<td>{prop.role}</td>
																<td>
																	<div className="dropdown">
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
																			<a className="dropdown-item" href="#">
																				<i
																					data-feather="edit-2"
																					className="me-50"
																				></i>
																				<span>Edit</span>
																			</a>
																			<a className="dropdown-item" href="#">
																				<i
																					data-feather="trash"
																					className="me-50"
																				></i>
																				<span>Delete</span>
																			</a>
																		</div>
																	</div>
																</td>
															</tr>
														)
												  })
												: ""}
										</tbody>
									</table>
									<nav
										aria-label="Page navigation example"
										className="pt-1"
									>
										<ul class="pagination justify-content-center">
											{typeof users.links != "undefined"
												? users.links.map((prop, index) => {
														return (
															<li
																key={index}
																className={`page item ${prop.active}`}
																tabIndex="-1"
															>
																<a className="page-link">
																	{prop.label}
																</a>
															</li>
														)
												  })
												: ""}
										</ul>
									</nav>
								</div>
							</div>
							{/* <!-- table --> */}
							{/* <!-- Add Role Modal --> */}
							<div
								className={`modal fade ${
									isOpen ? "show" : ""
								}`}
								style={{
									display: isOpen ? "block" : "none",
								}}
								id=""
								aria-hidden="true"
							>
								<div className="modal-dialog modal-lg modal-dialog-centered modal-add-new-role">
									<div className="modal-content">
										<div className="modal-header bg-transparent">
											<button
												type="button"
												className="btn-close"
												data-bs-dismiss="modal"
												aria-label="Close"
												onClick={() => setIsOpen(false)}
											></button>
										</div>
										<div className="modal-body px-5 pb-5">
											<div className="text-center mb-4">
												<h1 className="role-title">
													Add New Users
												</h1>
												<p>Set role permissions</p>
											</div>
											{validation.message && (
												<div className="alert alert-danger">
													{validation.message}
												</div>
											)}
											<form
												id="addRoleForm"
												className="row"
												onSubmit={handleSubmit}
											>
												<div className="row">
													<div className="col-4 ">
														<label
															className="form-label"
															for="modalRoleName"
														>
															Username
														</label>
														<input
															type="text"
															name="name"
															className="form-control"
															placeholder="Enter Username"
															onChange={onChangeInput}
															value={user.name}
														/>
													</div>
													<div className="col-4">
														<label
															className="form-label"
															for="modalRoleName"
														>
															Email
														</label>
														<input
															type="text"
															name="email"
															className="form-control"
															placeholder="Enter Email"
															onChange={onChangeInput}
															value={user.email}
														/>
													</div>
													<div className="col-4">
														<label
															className="form-label"
															for="modalRoleName"
														>
															NIP
														</label>
														<input
															type="text"
															name="nip"
															className="form-control"
															placeholder="Enter NIM"
															onChange={onChangeInput}
															value={user.nip}
														/>
													</div>
												</div>
												<div className="row mt-1">
													<div className="col-6">
														<label
															className="form-label"
															for="modalRoleName"
														>
															Password
														</label>
														<input
															type="text"
															name="password"
															className="form-control"
															placeholder="Enter Password"
															onChange={onChangeInput}
															value={user.password}
														/>
													</div>
													<div className="col-6">
														<label
															className="form-label"
															for="modalRoleName"
														>
															Check Password
														</label>
														<input
															type="text"
															name="repassword"
															className="form-control"
															placeholder="Enter Check Password"
															onChange={onChangeInput}
															value={user.repassword}
														/>
													</div>
												</div>

												<div className="col-12">
													<h4 className="mt-2 pt-50">Role</h4>
													{/* <!-- Permission table --> */}
													<div className="table-responsive">
														<table className="table table-flush-spacing">
															<tbody>
																<tr>
																	<td className="text-nowrap fw-bolder">
																		Akses Role
																	</td>
																	<td>
																		<div className="d-flex">
																			<div className="form-check me-3 me-lg-5">
																				<input
																					className="form-check-input"
																					type="radio"
																					name="role"
																					onChange={onChangeInput}
																					value="manager"
																				/>
																				<label
																					className="form-check-label"
																					for="userManagementRead"
																				>
																					{" "}
																					Manager{" "}
																				</label>
																			</div>
																			<div className="form-check me-3 me-lg-5">
																				<input
																					className="form-check-input"
																					type="radio"
																					name="role"
																					onChange={onChangeInput}
																					value="auditor"
																				/>
																				<label
																					className="form-check-label"
																					for="userManagementWrite"
																				>
																					{" "}
																					Auditor{" "}
																				</label>
																			</div>
																			<div className="form-check me-3 me-lg-6">
																				<input
																					className="form-check-input"
																					type="radio"
																					name="role"
																					onChange={onChangeInput}
																					value="auditee"
																				/>
																				<label
																					className="form-check-label"
																					for="userManagementWrite"
																				>
																					{" "}
																					Auditee{" "}
																				</label>
																			</div>
																		</div>
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
													{/* <!-- Permission table --> */}
												</div>
												<div className="col-12 text-center mt-2">
													<button
														type="submit"
														className="btn btn-primary me-1"
														id="type-success"
														// data-bs-dismiss="modal"
													>
														Submit
													</button>

													<button
														type="button"
														className="btn btn-outline-secondary"
														data-bs-dismiss="modal"
														aria-label="Close"
														onClick={() => setIsOpen(false)}
													>
														Discard
													</button>
												</div>
											</form>
											{/* <!--/ Add role form --> */}
										</div>
									</div>
								</div>
							</div>
							{/* <!--/ Add Role Modal --> */}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Users

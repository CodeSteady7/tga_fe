import React, { useState } from 'react'
import User from 'services/User'

export default function Modal({isOpen, setIsOpen, getUsers}) {
    const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
		role: "manager",
		nip: "",
		repassword: "",
	})

	
	const [validation, setValidation] = useState([])
		
	const onChangeInput = e => {
		const { name, value } = e.target
		setUser({ ...user, [name]: value })
	}
	
	const handleSubmit = async e => {
		e.preventDefault()
		await User.create(user)
			.then(response => {
				setUser({
					name: "",
                    email: "",
                    password: "",
                    role: "manager",
                    nip: "",
                    repassword: "",
				})
				setIsOpen(false)
				getUsers()
			})
			.catch(error => {
				setValidation(error.response.data)
			})
	}

    return (
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
                                    htmlFor="modalRoleName"
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
                                    htmlFor="modalRoleName"
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
                                    htmlFor="modalRoleName"
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
                                    htmlFor="modalRoleName"
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
                                    htmlFor="modalRoleName"
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
                                                            defaultChecked
                                                            value="manager"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="userManagementRead"
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
                                                            htmlFor="userManagementWrite"
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
                                                            htmlFor="userManagementWrite"
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
  )
}

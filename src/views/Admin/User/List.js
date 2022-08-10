import React from 'react'

export default function List({ users, setShowUpdate, onDelete }) {

    return (
        <div className="card ">
            <div className="table-responsive">
                <table className="user-list-table table">
                    <thead className="table-light">
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Nip</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {typeof users.data != "undefined" ? users.data.map((prop, key) => {
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
                                                <a className="dropdown-item" href="#" onClick={e => setShowUpdate(prop)}>
                                                    <i
                                                        data-feather="edit-2"
                                                        className="me-50"
                                                    ></i>
                                                    <span>Edit</span>
                                                </a>
                                                <a className="dropdown-item" href="#" onClick={e => onDelete(prop)}>
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
                        }) :
                            <tr>
                                <td colSpan={5} align="center"> -- Data Belum Tersedia --</td>
                            </tr>
                        }
                    </tbody>
                </table>
                <nav
                    aria-label="Page navigation example"
                    className="pt-1"
                >
                    <ul className="pagination justify-content-center">
                        {typeof users.links != "undefined"
                            ? users.links.map((prop, index) => {
                                return (
                                    <li
                                        key={index}
                                        className={`page-item ${prop.active ? 'active' : ''}`}
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
    )
}

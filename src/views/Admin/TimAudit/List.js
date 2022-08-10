import React from 'react'
import { Plus } from 'react-feather'
import { format } from "date-fns"


export default function List({ audits }) {

    return (
        <div className="card-datatable">
            <table className="dt-multilingual table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>No. Dok</th>
                        <th>Tipe Audit</th>
                        <th>Unit</th>
                        <th>Ruang Lingkup</th>
                        <th>Tanggal Audit</th>
                        <th>Ketua Auditor</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {typeof audits.data != "undefined" && audits.data.length > 0 ? audits.data.map((prop, key) => {
                        return (
                            <tr key={key}>
                                <td scope="row">{key + 1}</td>
                                <td>{prop.document_no}</td>
                                <td>{prop.audit_type}</td>
                                <td>{prop.department.name}</td>
                                <td>{prop.department.scope_type.toUpperCase().replace('_', ' ')}</td>
                                <td>{format(new Date(prop.audit_at), "dd-MM-yyyy")}</td>
                                <td>{prop.auditor.name}</td>
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
                            </tr>)
                    }) :
                        <tr>
                            <td colSpan={8} align="center">-- Data belum ditemukan --</td>
                        </tr>
                    }
                </tbody>
            </table>
            <nav aria-label="Page navigation example" className="pt-1">
                <ul className="pagination justify-content-center">
                    {typeof audits.links != "undefined" ? audits.links.map((prop, index) => {
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
    )
}

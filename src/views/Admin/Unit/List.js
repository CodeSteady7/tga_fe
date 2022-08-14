import React from 'react'

export default function List({ units, paginationLink, showEdit, onDelete }) {

    return (
        <div className="card-datatable">
            <table className="dt-multilingual table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Lingkup</th>
                        <th>Nama Lembaga</th>
                        <th>Jenjang</th>
                        <th>Kepala Lembaga</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {typeof units.data !== 'undefined' && units.data.length > 0 ? units.data.map((prop, key) => {
                        return (
                            <tr key={key}>
                                <td>{key + 1}</td>
                                <td>{prop.scope_type === 'academic' ? 'Akademik' : 'Non Akademik'} </td>
                                <td>{prop.name}</td>
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
                                            <a className="dropdown-item" href="#" onClick={e => showEdit(prop)} >
                                                <i data-feather="edit-2" className="me-50"></i>
                                                <span>Edit</span>
                                            </a>
                                            <a className="dropdown-item" href="#" onClick={e => onDelete(prop)} >
                                                <i data-feather="trash" className="me-50"></i>
                                                <span>Delete</span>
                                            </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        )
                    }) :
                        <tr>
                            <td colSpan={5} align="center" > -- Data belum tersedia --</td>
                        </tr>
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
    )
}

import React from 'react'
import { Plus } from 'react-feather'

export default function List() {
    
  return (
    <div className="card-datatable">
        <table className="dt-multilingual table">
            <thead>
                <tr>
                    <th>No</th>
                    <th>No. Dok</th>
                    <th>Tipe Audit</th>
                    <th>Nama Program Studi</th>
                    <th>Ruang Lingkup</th>
                    <th>Tanggal Audit</th>
                    <th>Ketua Auditor</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                {/* <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
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
                </tr> */}
            </tbody>
        </table>
    </div>
  )
}

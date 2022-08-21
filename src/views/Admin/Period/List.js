import React from 'react'
import { format } from "date-fns"

export default function List({ periods, handleEdit, handleDelete }) {
    return (
        <div className="card-datatable">
            <table className="dt-multilingual table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Description</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {periods.length > 0 ? periods.map((data, i) => {
                        return (
                            <tr key={data.id}>
                                <td key={data.id}>{i + 1}</td>
                                <td>{data.name}</td>
                                <td>{format(new Date(data.created_at), "HH:ii, dd MMM yyyy")}</td>
                                <td>{format(new Date(data.updated_at), "HH:ii, dd MMM yyyy")}</td>
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
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                                type="button"
                                                onClick={e => handleEdit(data, e)}
                                            >
                                                <span>Edit</span>
                                            </a>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                                type="button"
                                                onClick={e => handleDelete(data, e)}
                                            >
                                                <span>Delete</span>
                                            </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        )
                    }) :
                        <tr>
                            <td colSpan={5} align='center'>-- Data belum tersedia --</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

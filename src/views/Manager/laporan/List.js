import React from 'react'
import { format } from "date-fns"

export default function List({ periods, handleEdit, handleDelete }) {

  // const openView = () => {

  // }

  return (
    <div className="card-datatable">
      <table className="dt-multilingual table">
        <thead>
          <tr>
            <th>No</th>
            <th>No Dokuments</th>
            <th>Title</th>
            <th>Department</th>
            <th>Tanggal Audit</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>XX/XXXX/XXXX</td>
            <td>XXX</td>
            <td>XXXXX</td>
            <td>XXX</td>
            <td> <div className="dropdown">
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
                  href="/manager/laporanaudit/view"
                  type="button"
                  onClick={e => openView(data, e)}

                >
                  <span>View</span>
                </a>
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
            </div></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

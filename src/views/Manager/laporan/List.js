import React from 'react'
import { format } from "date-fns"

export default function List({ periods, handleEdit, handleDelete }) {
  return (
    <div className="card-datatable">
      <table className="dt-multilingual table">
        <thead>
          <tr>
            <th>No</th>
            <th>No Dokuments</th>
            <th>TItle</th>
            <th>Department</th>
            <th>Tanggal Audit</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

import AuditLib from 'components/Library/AuditLib'
import HTMLReactParser from 'html-react-parser'
import React, { useState } from 'react'
import { format } from 'date-fns';
import { Link } from 'react-router-dom'

export default function RejectedList({listData}) {
  const formatrejectedStatus = (status: bool) => {
    return HTMLReactParser(AuditLib.auditRejectedStatus(status))
  }

  return (
      <div className="card-datatable">
          <table className='dt-multilingual table table-bordered'>
              <thead>
                  <tr>
                      <th>No</th>
                      <th>No Dokumen Temuan</th>
                      <th>No Dokumen Audit</th>
                      <th>Tanggal Input Temuan</th>
                      <th>Ketua Auditor</th>
                      <th>Kategori</th>
                      <th>Status</th>
                  </tr>
              </thead>
              <tbody>
              {typeof listData.data != "undefined" && listData.data.length > 0 ? listData.data.map((prop, key) => {
                return (
                  <tr key={key}>
                    <td style={{fontSize: '13px'}}>{key + 1}</td>
                    <td style={{fontSize: '13px'}}>
                      <Link to={`/auditee/form-rejected/${prop.id}`}>{prop.document_no} </Link>
                    </td>
                    <td style={{fontSize: '13px'}}>{prop.audit_form.document_no} </td>
                    <td style={{fontSize: '13px'}}>{format(new Date(prop.created_at), "dd MMM yyyy HH:mm:ss")} </td>
                    <td style={{fontSize: '13px'}}>{prop.auditor_name} </td>
                    <td style={{fontSize: '13px'}}>{prop.instrument.sub_topic.topic.name} </td>
                    <td style={{fontSize: '13px'}}>{formatrejectedStatus(prop.is_set_action_plan)} </td>
                </tr>
                )
              }) : '' }
              </tbody>
          </table>
          <nav aria-label="Page navigation example" className="pt-1">
                <ul className="pagination justify-content-center">
                    {typeof listData.links != "undefined" ? listData.links.map((prop, index) => {
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

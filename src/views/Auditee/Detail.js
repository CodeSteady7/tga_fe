import AuditLib from 'components/Library/AuditLib'
import HTMLReactParser from 'html-react-parser'
import React from 'react'

export default function Detail({auditForm}) {
  return (
    <div className="card">
        <div className="card-header border-bottom">
            <h4 className="card-title">Form Audit {auditForm.department_name}</h4>
        </div>
        <div className="card-body pt-2">
            <div className='row pb-2'>
                <div className='col-6'>
                    <label className="form-label" >
                        No Dokumen
                    </label>
                    <p>{auditForm.document_no}</p>
                </div>
                <div className='col-6'>
                    <label className="form-label" >
                        { HTMLReactParser(AuditLib.formattedStatus(auditForm.audit_status)) }
                    </label>
                </div>
            </div>
            <div className="row pb-2">
                <div className='col-3'>
                    <label className="form-label" >
                        Audit
                    </label>
                    <p>{auditForm.audit_title}</p>
                </div>
                <div className='col-3'>
                    <label className="form-label" >
                        Tipe Audit
                    </label>
                    <p>{auditForm.audit_type}</p>
                </div>
                <div className='col-3'>
                    <label className="form-label" >
                        Standar Digunakan
                    </label>
                    <p>{auditForm.audit_standart}</p>
                </div>
                <div className='col-3'>
                    <label className="form-label" >
                        Ruang Lingkup
                    </label>
                    <p>{auditForm.scope_type}</p>
                </div>
            </div>
            <div className='row pb-2'>
                <div className='col-3'>
                    <label className="form-label" >
                        Auditor
                    </label>
                    <p>{auditForm.auditor_name}</p>
                </div>
                <div className='col-3'>
                    <label className="form-label" >
                        Anggota Auditor
                    </label>
                    <ol>
                        {typeof auditForm.auditor_member_list !== 'undefined' && auditForm.auditor_member_list.length > 0 ? 
                        auditForm.auditor_member_list.map((prop, index) => {
                            return (
                                <li key={index}>{prop}</li>
                            )
                        }) : '' }
                    </ol>
                </div>
                <div className='col-3'>
                    <label className="form-label" >
                        Auditee
                    </label>
                    <p>{auditForm.auditee_name}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

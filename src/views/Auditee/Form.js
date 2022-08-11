import Header from 'components/Header/Header';
import Navbar from 'components/Navbar/Navbar';
import React, { useEffect, useState } from 'react'
import { Plus } from 'react-feather';
import { useParams } from 'react-router-dom';
import Audit from 'services/Audit';

export default function Form() {
    const { id } = useParams();
    const [auditForm, setAuditForm] = useState({})
    const [instruments, setInstruments] = useState([])

    const getDetail = async () => {
        await Audit.getDetail(id).then((res) => {
            setAuditForm(res.data.result.audit)
            setInstruments(res.data.result.instrument)

            console.log(res.data.result.instrument)
        }).catch(err => {

        })
    }

    useEffect(() => {
        getDetail()
    }, [])
    
    return (
        <>
			<Header />
			<Navbar />
			<div className="app-content content ">
				<div className="content-overlay"></div>
				<div className="header-navbar-shadow"></div>
				<div className="content-wrapper container-xxl p-0">
					<div className="content-body">
						<section id="basic-datatable">
							<div className="row">
								<div className="col-12">
                                    <div className="card">
                                        <div className="card-header border-bottom">
                                            <h4 className="card-title">Form Audit {auditForm.department_name}</h4>
                                        </div>
                                        <div className="card-body pt-2">
                                            <div className='row pb-2'>
                                                <div className='col-12'>
                                                    <label className="form-label" >
                                                        No Dokumen
                                                    </label>
                                                    <p>{auditForm.document_no}</p>
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
                                    <div className='card'>
                                        <div className="card-datatable">
                                            <table className="dt-multilingual table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>No</th>
                                                        <th>Topik</th>
                                                        <th>Matriks</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {typeof instruments !== 'undefined' && instruments.length > 0 ?
                                                    instruments.map((instrument, key) => {
                                                        return (
                                                            <>
                                                            <tr>
                                                                <td rowSpan={2} valign='top'>{key + 1} </td>
                                                                <td rowSpan={2} valign={'top'}>
                                                                    <div className='mb-1'>
                                                                        {instrument.sub_topic.topic.name} 
                                                                    </div>
                                                                    <div className='mb-1'>
                                                                        {instrument.sub_topic.name} 
                                                                    </div>
                                                                </td>
                                                                <td valign='top'>{instrument.matrix}</td>
                                                            </tr>
                                                            <tr>
                                                                <td >
                                                                    <div className='row'>
                                                                        <div className='col-12 pb-2'>
                                                                            <textarea className='form-control' placeholder='Diisi bila tidak sesuai...'></textarea>
                                                                        </div>
                                                                        <div className='col-12 pb-2'>
                                                                            <input className='form-control' type={'file'}></input>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            </>
                                                        )
                                                    }) : ''
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className='card-footer'>
                                            <button
                                                className="btn btn-primary btn-round btn-sm  "
                                                type="button"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <Plus color="#ffff" size={15} />
                                                    Simpan Hasil
                                                </div>
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

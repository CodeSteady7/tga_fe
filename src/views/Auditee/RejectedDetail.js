import Header from 'components/Header/Header'
import AuditLib from 'components/Library/AuditLib';
import Navbar from 'components/Navbar/Navbar'
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { useParams } from 'react-router-dom';
import Audit from 'services/Audit';

export default function RejectedDetail() {
    const { id } = useParams();
    const [auditDetail, setAuditDetail] = useState({})
    const [input, setInput] = useState('')

    const getRejectedAuditDetail = async () => {
        await Audit.getRejectedAuditDetail(id)
        .then((result) => {
            setAuditDetail(result.data.result)
        }).catch((err) => {
            console.log(err)
        });
    }

    const formatScope = (string) => {
        if(Object.keys(auditDetail).length > 0) {
            return string.replace('_', ' ').toUpperCase()
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        confirmAlert({
            title: 'Konfirmasi',
            message: 'Apakah anda yakin untuk mengakhiri sesi ?',
            buttons: [
                {
                    label: 'Ya dan Selesai',
                    onClick: () => {
                        let data = {
                            action_plan_description: input
                        }
                        
                        Audit.inputActionPlan(id, data)
                        .then((result) => {
                            console.log(result)
                            setAuditDetail(result.data.result)
                        }).catch((err) => {
                            
                        });
                    }
                },
                {
                    label: 'Tidak',
                    onClick: () => {}
                }
            ]
        });
    }

    useEffect(() => {
        getRejectedAuditDetail()
    }, [])
    
    return (
        <>
			<Header />
			<Navbar />
            {
            Object.keys(auditDetail).length > 0 ? 
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
											<h4 className="card-title">DETAIL FORM BORANG AUDIT {formatScope(auditDetail.scope_type)} INTERNAL</h4>
										</div>
                                        <div className='card-body mt-2'>
                                            <div className='row'>
                                                <div className='col-8 '>
                                                    <p className=''><strong>No Dokumen</strong>  : {auditDetail.document_no}</p>
                                                </div>
                                                <div className='col-4 '>
                                                    <p className=''><strong>Tanggal Audit</strong>  : {format(new Date(auditDetail.created_at), "dd-MM-yyyy")}</p>
                                                </div>
                                                <div className='col-12 '>
                                                    <p className=''><strong>Deskripsi Temuan</strong> : {AuditLib.findingCatgoryText(auditDetail.category)} </p>
                                                </div>
                                                <div className='col-12 '>
                                                    <p className=''><strong>{auditDetail.scope_type === 'academic' ? 'Program Studi' : 'Unit'}</strong> : {auditDetail.audit_form.department_name} </p>
                                                </div>
                                            </div>
                                        </div>
									</div>
                                    <div className='card'>
                                        <div className="card-datatable">
                                            <table className='dt-multilingual table table-bordered'>
                                                <thead>
                                                    <tr>
                                                        <th width={'20%'}>Referensi</th>
                                                        <td>{auditDetail.instrument_topic_name}</td>
                                                    </tr>
                                                    <tr>
                                                        <th colSpan={2}>Uraian Temuan</th>
                                                    </tr>
                                                    <tr>
                                                        <td height={'100px'} valign={'top'} colSpan={2}>{auditDetail.finding_description}</td>
                                                    </tr>
                                                    <tr>
                                                        <th colSpan={2}>Akar Penyebab</th>
                                                    </tr>
                                                    <tr>
                                                        <td height={'100px'} valign={'top'}  colSpan={2}>{auditDetail.root_caused_description}</td>
                                                    </tr>
                                                    <tr>
                                                        <th colSpan={2}>Akibat</th>
                                                    </tr>
                                                    <tr>
                                                        <td height={'100px'} valign={'top'}  colSpan={2}>{auditDetail.consequence_description}</td>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div>
                                        <div className='card-body'>
                                            <p><strong>Ketua Auditor</strong></p>
                                            <p>{auditDetail.auditor_name}</p>
                                            <p>Dibuat Pada {format(new Date(auditDetail.created_at), "dd MM yyyy")}</p>
                                        </div>
                                    </div>
                                    <div className='card'>
                                        <div className="card-datatable">
                                            {!auditDetail.is_set_action_plan ?
                                            <table className='dt-multilingual table table-bordered'>
                                                <thead>
                                                    <tr>
                                                        <th colSpan={2}>Rencana Tindakan</th>
                                                    </tr>
                                                    <tr>
                                                        <td height={'100px'} valign={'top'} colSpan={2}>
                                                            <textarea 
                                                            className='form-control'
                                                            value={input}
                                                            onChange={e => setInput(e.target.value)}
                                                            ></textarea>
                                                            <p className='text-danger'>Anda hanya dapat mengisi instrument satu kali. Pastikan mengisi dengan benar!</p>
                                                            <button onClick={handleSubmit} className='btn btn-primary mt-1'>Submit</button>
                                                        </td>
                                                    </tr>
                                                </thead>
                                            </table>
                                            :
                                            <table className='dt-multilingual table table-bordered'>
                                                <thead>
                                                    <tr>
                                                        <th colSpan={2}>Rencana Tindakan</th>
                                                    </tr>
                                                    <tr>
                                                        <td height={'100px'} valign={'top'} colSpan={2}>
                                                           {auditDetail.action_plan_description}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p><strong>Nama Auiditee</strong></p>
                                                            <p>{auditDetail.auditee_name}</p>
                                                            <p>Update Pada {format(new Date(auditDetail.updated_at), "dd MM yyyy")}</p>
                                                        </td>
                                                    </tr>
                                                </thead>
                                            </table>
                                            }

                                        </div>

                                    </div>
								</div>
							</div>
                        </section>
                    </div>
                </div>
            </div>
            :
            ''
            }
        </>
    )
}

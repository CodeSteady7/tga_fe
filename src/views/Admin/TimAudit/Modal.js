import React, { useEffect, useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import Select from 'react-select'
import Audit from 'services/Audit'
import Period from 'services/Period'
import Unit from 'services/Unit'
import User from 'services/User'
import { format } from "date-fns"


export default function Modal({isOpen, setIsOpen, fecthDataAudit}) {
    const [unitOption, setUnitOption] = useState([])
    const [auditorOption, setAuditorOption] = useState([])
	const [periodOption, setPeriodOption] = useState([])
    const [period, setPeriod] = useState('')
    const [documentNo, setDocumentNo] = useState('')
    const [auditType, setAuditType] = useState('')
    const [auditStandart, setAuditStandart] = useState('')
    const [auditTitle, setAuditTitle] = useState('')
    const [unit, setUnit] = useState('')
    const [scope, setScope] = useState('')
    const [auditee, setAuditee] = useState('')
    const [auditDate, setAuditDate] = useState('')
    const [auditor, setAuditor] = useState('')
    const [auditorMembers, setAuditorMembers] = useState([])


    const getUsers = async ({role, pagination}) => {
		await User.getAll({role, pagination}).then(res => {
            let options = res.data.result.map((prop, index) => {
                return {
                    value: prop.id,
                    label: `${prop.name}`
                }
            })
    
            setAuditorOption(options)
		}).catch(error => {
			
		})
	}

    const getUnits = async ({pagination}) => {
        await Unit.getAll({pagination}).then(res => {
            let options = res.data.result.map((prop, index) => {
                return {
                    value: prop.id,
                    label: `${prop.name}: ${prop.user.name}`,
                }
            })
    
            setUnitOption(options)
        }).catch(error => {

        })
    } 

    const getPeriods = async () => {
		await Period.getAll()
		.then((response) => {
			const periods = response.data.result.map((prop, index) => {
				return {
					value: prop.id,
					label: `Periode ${prop.name}`
				}
			})

			setPeriodOption(periods)

		}).catch((error) => {
			
		});
	}

    const getDetailUnit = async (unitID) => {
        await Unit.show(unitID)
        .then(res => {
            let unit = res.data.result
            setScope(unit.scope_type.replace('_', ' ').toUpperCase())
            setAuditee(unit.user.name)
            setUnit(unit.id)
        }).catch(err => {
            console.log(err)
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let data = {
            "department_id"             : unit,
            "period_id"                 : period,
            "auditor_id"                : auditor,
            "document_no"               : documentNo,
            "auditor_member_list_json"  : auditorMembers,
            "audit_title"               : auditTitle,
            "audit_type"                : auditType,
            "audit_at"                  : format(new Date(auditDate), "yyyy-MM-dd"),
            "audit_standart"            : auditStandart
        }
        

        Audit.create(data).then(res => {
            setIsOpen(false)
            fecthDataAudit()
        }).catch(err => {

        })
    }

    const handleMultiChange = (list) => {
        if(list.length > 0) {
            list.map((prop, key) => {
                setAuditorMembers([...auditorMembers, prop.label ])
            })
        }
    }
    useEffect(() => {
        getUsers({role: 'auditor', pagination: 0})
        getUnits({pagination: 0})
        getPeriods()
    }, [])
    

    return (
    <div className={`modal  fade ${isOpen ? 'show' : ''}`} style={{display: isOpen ? 'block' : 'none'}} tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered modal-edit-user">
            <div className="modal-content">
                <div className="modal-body pb-5 px-sm-5 pt-50">
                    <div className="text-center mb-2">
                        <h1 className="mb-1">Tampilan Data Tim Audit</h1>
                    </div>
                    <form id="">
                        <div className="row gy-1 pt-75">
                            <div className="col-12 col-md-6">
								<label className="form-label" htmlFor="basic-icon-default-post">
									Periode
								</label>
								<Select 
									options={periodOption}
                                    onChange={e => setPeriod(e.value)}
								/>
							</div>
                            <div className="col-12 col-md-6">
                                <label className="form-label" htmlFor="modalviewTimAuditFirstName">
                                    No. Dok
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="ex. FM/PNL/P4M-04/01-00"
                                    value={documentNo}
                                    onChange={e => setDocumentNo(e.target.value)}
                                />
                            </div>
                            <div className="col-12 col-md-6">
                                <label className="form-label" htmlFor="modalviewTimAuditName">
                                    Judul Audit
                                </label>
                                <Select 
                                    options={[
                                        {
                                            label: "Mutu Internal",
                                            value: "Mutu Internal"
                                        }
                                    ]}
                                    onChange={e => setAuditTitle(e.value)}
                                />
                            </div>
                            <div className="col-12 col-md-6">
                                <label className="form-label" htmlFor="modalviewTimAuditLastName">
                                    Tipe Audit
                                </label>
                                <Select 
                                    options={[
                                        {
                                            label: "Lapangan",
                                            value: "Lapangan"
                                        }
                                    ]}
                                    onChange={e => setAuditType(e.value)}
                                />

                            </div>
                            <div className="col-12 col-md-6">
                                <label className="form-label" htmlFor="modalviewTimAuditName">
                                    Standar yang digunakan
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder='ex. Standard SPMI PNL 2019'
                                    value={auditStandart}
                                    onChange={e => setAuditStandart(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='row  gy-1 pt-75'>
                            <div className="col-12 col-md-12">
                                <label className="form-label" htmlFor="modalviewTimAuditName">
                                    Nama Lembaga
                                </label>
                                <Select 
                                    options={unitOption} 
                                    onChange={e => getDetailUnit(e.value)}
                                />
                            </div>
                            <div className="col-12 col-md-6">
                                <label className="form-label" htmlFor="modalviewTimAuditEmail">
                                    Ruang Lingkup
                                </label>
                                <input
                                    type="text"
                                    readOnly
                                    className="form-control"
                                    value={scope}
                                />
                            </div>
                            <div className="col-12 col-md-6">
                                <label className="form-label" htmlFor="modalEditTaxID">
                                    Auditee
                                </label>
                                <input
                                    type="text"
                                    readOnly
                                    className="form-control"
                                    value={auditee}
                                />
                            </div>
                        </div>
                        <div className='row gy-1 pt-75'>
                            <div className="col-12 col-md-6">
                                <label className="form-label" htmlFor="modalviewTimAuditStatus">
                                    Tanggal Audit
                                </label>
                                <ReactDatePicker
                                    className="form-control"
                                    onChange={date => setAuditDate(date)}
                                    selected={auditDate}
                                    minDate={new Date()}
                                />
                            </div>
                            <div className="col-12 col-md-6">
                                <label className="form-label" htmlFor="modalEditTaxID">
                                    Ketua Auditor
                                </label>
                                <Select
                                    options={auditorOption}
                                    onChange={e => setAuditor(e.value)}
                                />
                            </div>
                            <div className="col-12 col-md-12">
                                <label className="form-label" htmlFor="modalviewTimAuditCountry">
                                    Anggota Auditor
                                </label>
                                <Select
                                    options={auditorOption}
                                    isMulti
                                    onChange={handleMultiChange}
                                />
                            </div>
                        </div>
                        
                        <div className="col-12 text-center mt-2 pt-50">
                            <button type="submit" className="btn btn-primary me-1" onClick={handleSubmit}>
                                Submit
                            </button>
                            <button
                                type="reset"
                                className="btn btn-outline-secondary"
                                onClick={() => setIsOpen(false)}
                            >
                                Discard
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

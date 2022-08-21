import React, { useEffect, useState } from 'react'
import { Plus, Trash } from 'react-feather'
import Instrument from 'services/Instrument'

function Modal({subTopicID, getSubTopic, isOpen, setIsOpen}) {
    const [scopeType, setScopeType] = useState('academic')
    const [instrumentInput, setInstrumentInput] = useState('')
    const [instrumentList, setInstrumentList] = useState([])
    const [validation, setValidation] = useState([])

    const onChangeInput = (e) => {
        const { value } = e.target
        setScopeType(value)
    }

    const addInstrumentList = (e) => {
        e.preventDefault()
        setInstrumentList([...instrumentList, instrumentInput])
        setInstrumentInput('')
    }

    const removeInstrumentList = (e, index) => {
		e.preventDefault()
		let newInstrumentList = [...instrumentList]
		newInstrumentList.splice(index, 1)
		setInstrumentList(newInstrumentList)
	}

    const submitInstrument = async (e) => {
        e.preventDefault()
        
        let mappingInstrument = []

        instrumentList.map((data, index) => {
            return mappingInstrument.push({
                matrix: data,
                is_available: true
            })
        })
        let data = {
            instrument_sub_topic_id: subTopicID,
            scope_type: scopeType,
            instruments: mappingInstrument
        }

        await Instrument.addInstrumentListBySubTopic(data).then(res => {
            setInstrumentList([])
            getSubTopic(subTopicID)
            setIsOpen(false)
        }).catch(err => {

        })
    }

    return(
        <>
            {/* <!-- Modal to add new record --> */}
			<div className={`modal fade ${isOpen ? 'show' : ''}`} style={{display: isOpen ? 'block' : 'none'}} id="modals-slide-in">
				<div className="modal-dialog modal-lg">
					<form className="add-new-record modal-content pt-0">
						<div className="modal-header mb-1">
							<h5 className="modal-title" id="exampleModalLabel">
								Data Instrument
							</h5>
						</div>
						{validation.message && (
							<div className="alert alert-danger">
								{validation.message}
							</div>
						)}
						<div className="modal-body flex-grow-1">
                            <div className="mb-1">
                                <label className="form-label" htmlFor="basic-icon-default-post">
                                    Tipe Unit
                                </label>
                                <div className="table-responsive">
                                    <table className="table table-flush-spacing">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-flex">
                                                        <div className="form-check me-3 me-lg-5">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="scopeType"
                                                                onChange={onChangeInput}
                                                                defaultChecked
                                                                value="academic"
                                                            />
                                                            <label className="form-check-label" htmlFor="userManagementRead">
                                                                {" "}
                                                                Akademik{" "}
                                                            </label>
                                                        </div>
                                                        <div className="form-check me-3 me-lg-5">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="scopeType"
                                                                onChange={onChangeInput}
                                                                value="non_academic"
                                                            />
                                                            <label className="form-check-label" htmlFor="userManagementWrite">
                                                                {" "}
                                                                Non Akademik{" "}
                                                            </label>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

							<div className="mb-1">
								<label className="form-label" htmlFor="basic-icon-default-post">
									Pertanyaan
								</label>
								<div className="mb-3">
									<textarea type="text" className="form-control" placeholder="Instrument..." value={instrumentInput} onChange={e => setInstrumentInput(e.target.value)} />
									<div className="input-group-append pt-1">
										<button className="input-group-text" id="basic-addon1" onClick={(e) => addInstrumentList(e)}>
                                        <Plus color="#28c76f" size={12} />
                                            Tambah
										</button>
									</div>
								</div>
							</div>

							<div className="mb-5" >
								<table className="dt-multilingual table">
									<tbody>
										{
											instrumentList.map(((prop, index) => {
												return (
													<tr key={index}>
                                                        <td style={{fontSize: "13px", textAlign: "center"}}>{index+1}</td>
                                                        <td style={{fontSize: "13px", textAlign: "justify"}}>{prop}</td>
                                                        <td align="right" style={{fontSize: "13px"}}>
                                                            <button className="btn btn-sm btn-outline-danger" onClick={e => removeInstrumentList(e, index)} >
                                                                <Trash color="red" size={12} />
                                                            </button>
                                                        </td>
													</tr>
												)
											}))
										}
									</tbody>
								</table>
							</div>

							<button type="button" className="btn btn-primary data-submit me-1" onClick={(e) => submitInstrument(e)} >
								Submit
							</button>
							<button type="reset" className="btn btn-outline-secondary" onClick={ () => setIsOpen(false)} data-bs-dismiss="modal">
								Cancel
							</button>
						</div>
					</form>
				</div>
			</div>
        </>
    )
}

export default function InstrumentList({subTopicID, setIsMainPage}) {
    const [isOpen, setIsOpen] = useState(false)
    const [subTopic, setSubTopic] = useState({
        name: '',
        topic: '',
        instruments: []
    })

    const handleBackToMainPage = () => {
        setIsMainPage(true)
    }

    const getSubTopic = async (id) => {
        
        await Instrument.getInstrumentBySubTopic(id).then(res => {
            if(typeof res.data.result != "undefined") {
                setSubTopic({
                    name: res.data.result.name,
                    topic: res.data.result.topic.name,
                    instruments: res.data.result.instruments
                })
            }
        }).catch(err => {

        })
    }
    
    useEffect(() => {
        getSubTopic(subTopicID)
    }, [])

    return (
    <div className="card">
        <div className="card-header">
            <h4 className="card-title">Pertanyaan</h4>
            <div className="d-flex">
                <div className="" style={{ padding: 3 }}>
                    <button
                        className="btn btn-primary btn-round btn-sm "
                        onClick={() => handleBackToMainPage()}
                        type="button"
                    >
                        <div className="d-flex align-items-center">Back</div>
                    </button>
                </div>
                <div className="" style={{ padding: 3 }}>
                    <button
                        className="btn btn-primary btn-round btn-sm "
                        onClick={() => setIsOpen(true)}
                        type="button"
                    >
                        <div className="d-flex align-items-center">Tambah Pertanyaan</div>
                    </button>
                </div>
            </div>
        </div>
        <div className="card-body">
            <div className="row gy-2">
                <div className="col-12">
                    <div className="bg-light-secondary position-relative rounded p-2">
                        <h5>{subTopic.topic} - {subTopic.name} </h5>
                        <div className="flex-wrap">
                            <div className='row'>
                                <div className='col-12'>
                                <ol>
                                    { subTopic.instruments.length > 0 ? subTopic.instruments.map((instrument, index) => {
                                        return (
                                            <li style={{fontSize: '13px'}}
                                                key={index} 
                                                className="align-items-center  p-1">
                                                <div style={{fontWeight: 'bold'}}>{instrument.scope_type.replace('_', ' ').toUpperCase()} </div>
                                                <div>{instrument.matrix}</div>
                                            </li>
                                        )
                                    }) : '-- belum Menambahkan Pertanyaan --'
                                    }
                                </ol>
                                </div>
                            </div>
                        </div>
                        <h6 className="fw-bolder">
                            <span className="me-50"></span>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
        <Modal subTopicID={subTopicID} getSubTopic={getSubTopic} isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

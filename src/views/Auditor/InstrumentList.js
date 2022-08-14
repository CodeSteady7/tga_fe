import React, { useEffect, useState } from 'react'
import { Plus } from 'react-feather'
import Audit from 'services/Audit';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useNavigate } from 'react-router-dom';
import HTMLReactParser from 'html-react-parser';
import Modal from './Modal';

export default function InstrumentList({auditID, setInput, input, getDetail, auditResult}) {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false)
    const [instrumentIndex, setInstrumentIndex] = useState('')
    const [inputDescription, setInputDescription] = useState({
        category: 'kts_minor',
        finding_description: '',
        root_caused_description: '',
        consequence_description: ''
    })

    const handleSubmit = async (event) =>{ 
        confirmAlert({
            title: 'Konfirmasi',
            message: 'Apakah anda yakin untuk mengakhiri sesi ?',
            buttons: [
                {
                    label: 'Ya dan Selesai',
                    onClick: () => {
                        let data = input.map((
                            {
                                ID: instrument_id, 
                                description, 
                                approve
                            }) => ({ 
                                instrument_id, 
                                approve, 
                                category: description.category ?? '', 
                                finding_description: description.finding_description ?? '', 
                                root_caused_description: description.root_caused_description ?? '', 
                                consequence_description: description.consequence_description ?? '' 
                            }))
                        
                        Audit.approve(auditID, data)
                        .then((result) => {
                            console.log(result)   
                            navigate('/auditor')
                        }).catch((err) => {
                            console.log(err)
                        })
                    }
                },
                {
                    label: 'Tidak',
                    onClick: () => {}
                }
            ]
        });
    }

    const handleInput = (event) => {
        let ID          = event.target.getAttribute("data-id");
        let newInput    = [...input];
        let index       = newInput.findIndex((obj => obj.ID == ID));
        newInput[index]['approve'] = parseInt(event.target.value) ?? 1
        
        if(newInput[index]['approve'] === 0) {
            setIsOpen(true)
            setInstrumentIndex(index)
        } else {
            newInput[index]['description'] = {}
        }

        setInput(newInput);
    }

    const showModal = (event) => {
        event.preventDefault()
        let ID          = event.target.getAttribute("data-id");
        let newInput    = [...input];
        let index       = newInput.findIndex((obj => obj.ID == ID));
        setIsOpen(true)
        setInstrumentIndex(index)
        setInputDescription({
            category: input[index]['description']['category'],
            finding_description: input[index]['description']['finding_description'],
            root_caused_description: input[index]['description']['root_caused_description'],
            consequence_description: input[index]['description']['consequence_description'],
        })

        console.log(index, {
            category: input[index]['description']['category'],
            finding_description: input[index]['description']['finding_description'],
            root_caused_description: input[index]['description']['root_caused_description'],
            consequence_description: input[index]['description']['consequence_description'],
        })
    }

    useEffect(() => {
    }, [])
    return (
    <>
        <div className='card'>
            <div className="card-datatable">
                <table className='dt-multilingual table table-bordered'>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Referensi</th>
                            <th>Pertanyaan</th>
                            <th>Keterangan</th>
                            <th>Approval</th>
                        </tr>
                    </thead>
                <tbody>
                {typeof auditResult !== 'undefined' && auditResult.length > 0 ?
                        auditResult.map((result, key) => {
                            return (
                                <tr>
                                    <td  valign='top' style={{'fontSize': 12}}>{key + 1} </td>
                                    <td  valign='top' style={{'fontSize': 12}}>{result.instrument_origin.sub_topic.topic.name} </td>
                                    <td  valign='top' style={{'fontSize': 12}}>{result.instrument_origin.sub_topic.name} </td>
                                    <td  valign='top' style={{'fontSize': 12}}>
                                        <div>{result.description ?? '-'} </div>
                                        {result.evidence_file != null ? HTMLReactParser(`<a data-ref=${result.evidence_file} href=${encodeURI(result.evidence_file)} target="_blank">
                                            Evidence File 
                                        </a>`) : ''}
                                    </td>
                                    <td>
                                        <div className="d-flex">
                                            <div className="form-check me-3 me-lg-5">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name={`approve[${key}]`}
                                                    value="1"
                                                    data-id={result.id} onChange={handleInput}
                                                    defaultChecked
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="userManagementRead"
                                                >
                                                    {" "}
                                                    Ya{" "}
                                                </label>
                                            </div>
                                            <div className="form-check me-3 me-lg-5">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name={`approve[${key}]`}
                                                    value="0"
                                                    data-id={result.id} onChange={handleInput}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="userManagementRead"
                                                >
                                                    {" "}
                                                    Tidak{" "}
                                                </label>
                                            </div>
                                        </div>
                                        {(Object.keys(input[key]['description']).length > 0 ?
                                        <>
                                            <div className="pt-1">
                                                <a href='' data-id={result.id} onClick={showModal} >Rejected Detail</a>
                                            </div>
                                        </>
                                        :
                                        '' )}
                                    </td>
                                </tr>
                            )
                        })
                        : ''
                    }
                </tbody>
                </table>
            </div>
            <div className='card-footer'>
                <button
                    className="btn btn-primary btn-round btn-sm  "
                    type="button"
                    onClick={handleSubmit}
                >
                    <div className="d-flex align-items-center">
                        <Plus color="#ffff" size={15} />
                        Simpan Hasil
                    </div>
                </button>
            </div>
        </div>
        <Modal setIsOpen={setIsOpen} isOpen={isOpen} instrumentIndex={instrumentIndex} input={input} setInput={setInput} inputDescription={inputDescription} setInputDescription={setInputDescription} />
    </>
  )
}

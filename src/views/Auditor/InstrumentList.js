import React, { useEffect, useState } from 'react'
import { Plus, Trash } from 'react-feather'
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

    const [positiveIssue, setPositiveIssue] = useState('')
    const [positiveIssueList, setPositiveIssueList] = useState([])

    const [conclusion, setConclusion] = useState('')
    const [conclusionList, setConclusionList] = useState([])

    const [isDisable, setIsDisable] = useState(false)

    const handleSubmit = async (event) =>{ 
        confirmAlert({
            title: 'Konfirmasi',
            message: 'Apakah anda yakin untuk mengakhiri sesi ?',
            buttons: [
                {
                    label: 'Ya dan Selesai',
                    onClick: () => {
                        setIsDisable(true)
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
                        
                        Audit.approve(auditID, {data: data, positive_issue: positiveIssueList, conclusion: conclusionList})
                        .then((result) => {
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
	};

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

    const addPositiveIssue = () => {
        if(positiveIssue !== '') {
            setPositiveIssueList([...positiveIssueList, positiveIssue])
            setPositiveIssue('')
        } else {
            alert('Keterangan Temuan Belum Diisi')
        }
    }

    const removePositiveIssue = (index) => {
        let newPositiveIssueList = [...positiveIssueList]
		newPositiveIssueList.splice(index, 1)
		setPositiveIssueList(newPositiveIssueList)
    }

    const addConclusion = () => {
        if(conclusion !== '') {
            setConclusionList([...conclusionList, conclusion])
            setConclusion('')
        } else {
            alert('Kesimpulan Belum Diisi')
        }
    }

    const removeConclusion = (index) => {
        let newConclusionList = [...ConclusionList]
		newConclusionList.splice(index, 1)
		setConclusionList(newConclusionList)
    }

    useEffect(() => {
    
    }, [positiveIssueList, conclusionList])
    
    
    return (
    <>
        <div className='row'>
            <div className='col-7'>
                <div className='card'>
                    <div className="card-datatable">
                        <table className='dt-multilingual table table-bordered'>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Referensi</th>
                                    <th>Pertanyaan</th>
                                    <th>Approval</th>
                                </tr>
                            </thead>
                        <tbody>
                        {typeof auditResult !== 'undefined' && auditResult.length > 0 ?
                                auditResult.map((result, key) => {
                                    return (
                                        <tr>
                                            <td  valign='top' style={{'fontSize': 12}}>{key + 1} </td>
                                            <td  valign='top' width={'20%'} style={{'fontSize': 12}}>
                                                <div style={{fontWeight: 'bold'}} className={''}>{result.instrument_origin.sub_topic.topic.name}</div> 
                                                <div className=''>{result.instrument_origin.sub_topic.name}</div>
                                            </td>
                                            <td  valign='top' style={{'fontSize': 12}}>
                                                <div className='pb-1'>
                                                    {result.instrument} 
                                                </div>
                                                <b>KETERANGAN</b>
                                                <div>{result.description ?? '-'} </div>
                                                {result.evidence_file != null ? HTMLReactParser(`<a data-ref=${result.evidence_file} href=${encodeURI(result.evidence_file)} target="_blank">
                                                    Evidence File 
                                                </a>`) : ''}
                                            </td>
                                            <td style={{'fontSize': 12}}>
                                                <div className="d-flex">
                                                    <div className="form-check me-3 me-lg-2">
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
                                                    <div className="form-check me-3 me-lg-2">
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
                </div>
            </div>
            <div className='col-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className="mb-1">
                                    <div className="input-group mb-3">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Input Temuan Positif ... " 
                                            style={{fontSize: '12px'}}
                                            value={positiveIssue} 
                                            onChange={e => setPositiveIssue(e.target.value)} 
                                            />
                                        <div className="input-group-append">
                                            <button style={{fontSize: '12px'}} className="input-group-text" id="basic-addon1" onClick={e => addPositiveIssue(e)}>
                                                Tambah
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-5" >
                                    <table className="dt-multilingual table ">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Deskripsi Temuan</th>
                                                <th>Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                positiveIssueList.map(((prop, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td style={{'fontSize': 12}}>{index+1}</td>
                                                            <td style={{'fontSize': 12}}>{prop}</td>
                                                            <td style={{'fontSize': 12}} width="20px" align="right">
                                                                <button className="btn btn-sm btn-outline-danger" onClick={e => removePositiveIssue(index)} >
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
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className="mb-1">
                                    <div className="input-group mb-3">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Input Kesimpulan ... " 
                                            style={{fontSize: '12px'}}
                                            value={conclusion} 
                                            onChange={e => setConclusion(e.target.value)} 
                                            />
                                        <div className="input-group-append">
                                            <button style={{fontSize: '12px'}} className="input-group-text" id="basic-addon1" onClick={e => addConclusion(e)}>
                                                Tambah
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-5" >
                                    <table className="dt-multilingual table ">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Deskripsi Kesimpulan</th>
                                                <th>Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                conclusionList.map(((prop, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td style={{'fontSize': 12}}>{index+1}</td>
                                                            <td style={{'fontSize': 12}}>{prop}</td>
                                                            <td style={{'fontSize': 12}} width="20px" align="right">
                                                                <button className="btn btn-sm btn-outline-danger" onClick={e => removeConclusion(index)} >
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
                            </div>
                        </div>
                    </div>
                        
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <button
                            className="btn btn-block btn-primary btn-round btn-sm  "
                            type="button"
                            onClick={handleSubmit}
                            disabled={isDisable}
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
        <Modal setIsOpen={setIsOpen} isOpen={isOpen} instrumentIndex={instrumentIndex} input={input} setInput={setInput} inputDescription={inputDescription} setInputDescription={setInputDescription} />
    </>
  )
}

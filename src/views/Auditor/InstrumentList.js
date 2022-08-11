import React, { useEffect, useState } from 'react'
import { Plus } from 'react-feather'
import Audit from 'services/Audit';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useNavigate } from 'react-router-dom';
import HTMLReactParser from 'html-react-parser';

export default function InstrumentList({auditID, setInput, input, getDetail, auditResult}) {
    const navigate = useNavigate();

    const handleSubmit = async (event) =>{ 
        confirmAlert({
            title: 'Konfirmasi',
            message: 'Apakah anda yakin untuk mengakhiri sesi ?',
            buttons: [
                {
                    label: 'Ya dan Selesai',
                    onClick: () => {
                        
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
        setInput(newInput);
    }

    console.log(input)

    useEffect(() => {
    },)
    

    return (
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
                                                data-id={result.id} data-index={key} onChange={handleInput}
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
                                                data-id={result.id} data-index={key} onChange={handleInput}
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
  )
}

import React, { useEffect, useState } from 'react'
import { Plus } from 'react-feather'
import Audit from 'services/Audit';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useNavigate } from 'react-router-dom';

export default function InstrumentList({auditID, instruments, setInput, input, getDetail}) {
    const navigate = useNavigate();

    const handleInput = (event) => {
        let ID          = event.target.getAttribute("data-id");
        let index       = event.target.getAttribute("data-index");
        let newInput    = [...input];

        newInput[index]['ID'] = ID;
        newInput[index]['description'] = event.target.value;
        setInput(newInput);

    }

    const inputFile = (event) => {
        let ID          = event.target.getAttribute("data-id");
        let index       = event.target.getAttribute("data-index");
        let newInput    = [...input];

        newInput[index]['ID'] = ID;
        newInput[index]['file'] = typeof event.target.files[0] !== 'undefined' ? event.target.files[0] : [];
        setInput(newInput);
    }

    const handleSubmit = async (event) =>{ 
        confirmAlert({
            title: 'Konfirmasi',
            message: 'Apakah anda yakin untuk mengakhiri sesi ?',
            buttons: [
                {
                    label: 'Ya dan Selesai',
                    onClick: () => {
                        input.map((prop) => {
                            if(prop.ID !== '') {
                            Audit.submitfulfillment(auditID, prop.ID, {description: prop.description, file: prop.file ?? null})
                            .then((result) => {
                                
                            }).catch((err) => {
                                
                            });
                            }
                        })

                        Audit.finishFulFillment(auditID)
                        .then(result => {
                            navigate('/auditee')
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

    useEffect(() => {
    },)
    

    return (
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
                                            <textarea className='form-control' placeholder='Diisi bila tidak sesuai...' data-id={instrument.id} data-index={key} onChange={handleInput} ></textarea>
                                        </div>
                                        <div className='col-12 pb-2'>
                                            <input className='form-control' accept="image/gif, image/jpeg, application/pdf" data-id={instrument.id} data-index={key} type={'file'} onChange={inputFile}></input>
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

import React, { useEffect, useState } from 'react';
import { Plus } from 'react-feather';
import Audit from 'services/Audit';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useNavigate } from 'react-router-dom';

export default function InstrumentList({ auditID, setInput, input, getDetail, topics }) {
	const navigate = useNavigate();

	const handleInput = event => {
		let ID = event.target.getAttribute('data-id');
		let newInput = [...input];
		let index = newInput.findIndex(obj => obj.ID == ID);
		newInput[index]['description'] = event.target.value ?? ' ';
		setInput(newInput);
	};

	const inputFile = event => {
		let ID = event.target.getAttribute('data-id');
		let newInput = [...input];
		let index = newInput.findIndex(obj => obj.ID == ID);
		newInput[index]['file'] =
			typeof event.target.files[0] !== 'undefined' ? event.target.files[0] : [];
		setInput(newInput);
	};

    const handleSubmit = async (event) =>{ 
        confirmAlert({
            title: 'Konfirmasi',
            message: 'Apakah anda yakin untuk mengakhiri sesi ?',
            buttons: [
                {
                    label: 'Ya dan Selesai',
                    onClick: () => {
                        input.map((prop) => {
                            Audit.submitfulfillment(auditID, prop.ID, {description: prop.description, file: prop.file ?? null})
                            .then((result) => {
                                
                            }).catch((err) => {
                                
                            })
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
    
    return (
    <div className='card'>

        <div className="card-datatable">
            <table className='dt-multilingual table table-bordered'>
                <thead>
                    <tr>
                        <th>Referensi</th>
                        <th>Pertanyaan</th>
                        <th>Keterangan</th>
                    </tr>
                </thead>
                {typeof topics !== 'undefined' && topics.length > 0 ?
                    topics.map((topic) => {
                        return (
                            <>
                            {topic.sub_topics.map((sub_topic, key) => {
                                return (
                                    <>
                                    <thead>
                                    <tr>
                                        <th>{topic.name}</th>
                                        <th>{sub_topic.name}</th>
                                        <th></th>
                                    </tr>

                                    </thead>
                                    {sub_topic.instruments.map((instrument) => {
                                            return (
                                                <tbody>
                                                    <tr>
                                                        <td></td>
                                                        <td valign='top' style={{'fontSize': 12}}>{instrument.matrix}</td>
                                                        <td>
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
                                                </tbody>
                                            ) 
                                        })}
                                    </>
                                )
                            })}
                            </>
                        )
                    }) : ''
                }
            </table>
        </div>
        <div className='card-footer'>
            <button
                className="btn btn-primary btn-round btn-sm  "
                type="button"
                onClick={handleSubmit}
                disabled={true}
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

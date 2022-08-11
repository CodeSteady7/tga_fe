import React, { Component, useCallback, useEffect, useState } from 'react'
import Header from 'components/Header/Header';
import Navbar from 'components/Navbar/Navbar';
import { Plus } from 'react-feather';
import { useParams } from 'react-router-dom';
import Audit from 'services/Audit';
import FormDetail from './FormDetail';
import InstrumentList from './InstrumentList';

export default function Form() {
    const { id } = useParams();
    const [auditForm, setAuditForm] = useState({})
    const [instruments, setInstruments] = useState([])
    const [input, setInput] = useState([])


    const getDetail = async () => {
        await Audit.getDetail(id).then((res) => {
            setAuditForm(res.data.result.audit)
            setInstruments(res.data.result.instrument)

            let defaultInput = []
            
            for(let i in res.data.result.instrument) {
                defaultInput = [...defaultInput, {ID: '', description: '', file: []}]
            }
            
            setInput(defaultInput)

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
                                    <FormDetail auditForm={auditForm} />
                                    <p className='text-danger'>Anda hanya dapat mengisi instrument satu kali. Pastikan mengisi dengan benar!</p>
                                    <InstrumentList auditID={id} instruments={instruments} setInput={setInput} input={input} getDetail={getDetail} />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

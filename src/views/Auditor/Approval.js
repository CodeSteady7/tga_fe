import Header from 'components/Header/Header';
import Navbar from 'components/Navbar/Navbar';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Audit from 'services/Audit';
import Detail from './Detail'
import InstrumentList from './InstrumentList';

export default function Approval() {
    const { id } = useParams();
    const [auditForm, setAuditForm] = useState({})
    const [auditResult, setAuditResult] = useState([])
    const [input, setInput] = useState([])


    const getDetail = async () => {
        await Audit.getResult(id).then((res) => {
            setAuditForm(res.data.result.audit)
            setAuditResult(res.data.result.result)

            let defaultInput = []
            
            for(let i in res.data.result.result) {
                defaultInput = [...defaultInput, {ID: res.data.result.result[i].id, approve: 1}]
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
                                    <Detail auditForm={auditForm} />
                                    <p className='text-danger'>Anda hanya dapat mengisi instrument satu kali. Pastikan mengisi dengan benar!</p>
                                    <InstrumentList auditID={id}  setInput={setInput} input={input} getDetail={getDetail} auditResult={auditResult} />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

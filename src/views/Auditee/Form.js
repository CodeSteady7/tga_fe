import React, { Component, useCallback, useEffect, useState } from 'react'
import Header from 'components/Header/Header';
import Navbar from 'components/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import Audit from 'services/Audit';
import Detail from './Detail';
import InstrumentList from './InstrumentList';

export default function Form() {
    const { id } = useParams();
    const [auditForm, setAuditForm] = useState({})
    const [topics, setTopics] = useState([])
    const [input, setInput] = useState([])


    const getDetail = async () => {
        await Audit.getDetail(id).then((res) => {
            setAuditForm(res.data.result.audit)
            setTopics(res.data.result.topic)

            let defaultInput = []
            
            for(let topic in res.data.result.topic) {
                for (let subTopic in res.data.topic[topic].sub_topics) {
                    for (let instrument in res.data.topic[topic].sub_topics[subTopic].instruments) {
                        defaultInput = [...defaultInput, {
                                        ID: res.data.topic[topic].sub_topics[subTopic].instruments[instrument].id, 
                                        description: '', 
                                        file: []
                                    }]
                    }
                }
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
                                    <InstrumentList auditID={id}  setInput={setInput} input={input} getDetail={getDetail} topics={topics} />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

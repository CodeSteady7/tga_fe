import Header from 'components/Header/Header';
import Navbar from 'components/Navbar/Navbar';
import React, { useEffect, useState } from 'react';
import Audit from 'services/Audit';
import RejectedList from './RejectedList';

export default function Rejected() {
	const [listData, setListData] = useState([]);
	let params = {};

	const getRejectedAudit = async () => {
		await Audit.getRejectedAudit(params)
			.then(result => {
				console.log(result.data.result);
				setListData(result.data.result);
			})
			.catch(err => {});
	};

	useEffect(() => {
		getRejectedAudit();
	}, []);
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
									<div className="card">
										<div className="card-header border-bottom">
											<h4 className="card-title">Daftar Formulir</h4>
										</div>
										<RejectedList listData={listData} />
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</>
	);
}

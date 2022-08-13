import Header from 'components/Header/Header';
import Navbar from 'components/Navbar/Navbar';
import React, { useEffect, useState } from 'react';
import List from './laporan/List';
import 'react-datepicker/dist/react-datepicker.css';

export default function LaporanAudit() {
	return (
		<>
			<div className="loading">
				<div
					className="vertical-layout vertical-menu-modern  navbar-floating footer-static  "
					data-open="click"
					data-menu="vertical-menu-modern"
					data-col=""
				>
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
													<h4 className="card-title">Laporan Audit</h4>
												</div>
												<List />
											</div>
										</div>
									</div>
								</section>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

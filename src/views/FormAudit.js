import React, { useEffect, useState } from "react"
import Navbar from "../components/Navbar/Navbar"
import Header from "../components/Header/Header"
import { Plus, Search } from "react-feather"
import Select from "react-select"
import Period from "services/Period"

export default function FormAudit() {
	const [periodOption, setPeriodOption] = useState([])
    const [period, setPeriod] = useState('')


	const getPeriods = async () => {
		await Period.getAll()
		.then((response) => {
			const periods = response.data.result.map((prop, index) => {
				return {
					value: prop.id,
					label: `Periode ${prop.name}`
				}
			})

			setPeriodOption(periods)

		}).catch((error) => {
			
		});
	}

	useEffect(() => {
        getPeriods()
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
									<div className="card">
										<div className="card-header border-bottom">
											<h4 className="card-title">Daftar Instrumen</h4>
										</div>
										<div className="card-body pt-2">
											<div className="row">
												<label className="form-label" htmlFor="basic-icon-default-post">
													Cari Berdasarkan Periode
												</label>
												<div className="col-4">
													<Select 
														options={periodOption}
														onChange={e => setPeriod(e.value)}
													/>
												</div>
												
											</div>
										</div>
										<div className="card-datatable">
											<table className="dt-multilingual table">
												<thead>
													<tr>
														<th>No</th>
														<th>No. Dok</th>
														<th>Tipe Audit</th>
														<th>Tanggal Audit</th>
														<th>Ketua Auditor</th>
														<th>Aksi</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td colSpan={6} align="center"> -- Belum Tersedia --</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</>
	)
}

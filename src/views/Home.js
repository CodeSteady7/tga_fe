import React, { useEffect, useState } from "react"
import LineChart from "components/Charts/LineChart"
import { Calendar } from "react-feather"

import Header from "../components/Header/Header"
import Navbar from "../components/Navbar/Navbar"
import Report from "services/Report"
function Home() {
	const [labelAudit, setLabelAudit] = useState([])
	const [dataAudit, setDataAudit] = useState([])
	const [labelRejection, setLabelRejection] = useState([])
	const [dataRejection, setDataRejection] = useState([])

	const getAuditChart = async () => {
		await Report.dashboardGraph()
		.then(res => {
	
		  let label = []
		  let value = []
		  res.data.result.audit.map((prop) => {
			label = [...label, prop.label]
			value = [...value, prop.value]
		  })
		  setLabelAudit(label)
		  setDataAudit(value)
	
		  label = []
		  value = []
		  res.data.result.rejection.map((prop) => {
			label = [...label, prop.label]
			value = [...value, prop.value]
		  })
		  setLabelRejection(label)
		  setDataRejection(value)
		})
	}

	useEffect(() => {
		getAuditChart()  
	}, [])
	return (
		<>
			<Header />
			<Navbar />
			<div
				className="vertical-layout vertical-menu-modern navbar-floating footer-static"
				data-open="click"
				data-menu="vertical-menu-modern"
				data-col=""
			>
				<div className="app-content content">
					<div className="content-overlay"></div>
					<div className="header-navbar-shadow"></div>
					<div className="content-wrapper container-xxl p-0">
						<div className="content-header row"></div>
						<div className="content-body">
							<section className="m-0 p-0">
								{/* <!-- Dashboard Ecommerce Starts --> */}
								<div className="row match-height">
									<div className="col-xl-12 col-md-12 col-12">
										<div className="card card-congratulation-medal">
											<div className="card-body">
												<h5>Halaman Utama</h5>
												<p className="card-text font-small-3">
													Selamat Datang di sistem Audit Mutu Internal Politeknik Negeri Lhokseumawe
												</p>
											</div>
										</div>
									</div>
								</div>
								{/* <!-- Dashboard Ecommerce ends --> */}
								<div class="row">
									{/* <!--Bar Chart Start --> */}
									<div class="col-xl-6 col-12">
										<LineChart categoryTitle={'Kategori Temuan'} categoryLabel={['Temuan']} lineBarLabel={labelRejection} lineBarData={dataRejection} />
									</div>
									<div class="col-xl-6 col-12">
										<LineChart categoryTitle={'Kategori Audit'} categoryLabel={['Audit']} lineBarLabel={labelAudit} lineBarData={dataAudit} />
									</div>
								</div>
							</section>


						</div>
					</div>
				</div>

				<div className="sidenav-overlay"></div>
				<div className="drag-target"></div>
			</div>
		</>
	)
}

export default Home

import React, { useState } from 'react';
import './FormLaporan.css';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import imgPoltek from '../../../assets/img/poltek.png';
export default function FormLaporan() {
	const [layoutSelection, setLayoutSelection] = useState({ text: 'A4', value: 'size-a4' });

	return (
		<>
			<div id="example">
				<div className="page-container hidden-on-narrow">
					<PDFExport>
						<div className={`pdf-page  A4 size-a4`}>
							<div className="inner-page">
								<div className="pdf-header">
									<span className="company-logo">
										<div className="headerForm">
											<div className="headerFormUp">
												<div className="column01">
													<img src={imgPoltek} alt="pnl" style={{ width: '50' }} />
												</div>
												<div className="column02">
													<h4>KEMENTERIAN PENDIDIKAN DAN KEBUDAYAAN</h4>
												</div>
											</div>
											<div className="headerFormDown">
												<div className="column03">
													<h4> FORM LAPORAN AUDIT MUTU INTERNAL PROGRAM STUDI </h4>
												</div>
												<div className="column04">
													<span>No. Dok : FM/PNL/P4M-04/01</span> <br />
													<span>Revisi : 01 </span>
													<br />
													<span>Tgl Eff : September 2021</span>
													<br />
													<span>Jlh Hal : 1 dari 3</span>
													<br />
												</div>
											</div>
										</div>
									</span>
								</div>

								<div className="part_i">
									<span>PENDAHULUAN</span>
								</div>
								<div>
									<table className="formtable">
										{/* <table class="table table-bordered"> */}
										<tbody className="fontsizereport">
											<tr>
												<td className="columnform" scope="col">
													Jurusan
												</td>
												<td className="columnformvalue" colspan="4">
													First
												</td>
											</tr>
											<tr>
												<td className="columnform" scope="col">
													Program Studi
												</td>
												<td className="columnformvalue" colspan="4">
													First
												</td>
											</tr>
											<tr>
												<td className="columnform" scope="col">
													Alamat
												</td>
												<td className="columnformvalue" colspan="4">
													First
												</td>
											</tr>
											<tr>
												<td className="columnform" scope="col">
													Kaprodi
												</td>
												<td scope="col" className="colformtd">
													#
												</td>
												<td className="columnformvalue" colspan="2">
													First
												</td>
											</tr>
											<tr>
												<td className="columnform" scope="col">
													Tanggal Audit
												</td>
												<td className="columnformvalue" colspan="4">
													First
												</td>
											</tr>
											<tr>
												<td className="columnform" scope="col">
													Ketua Audit
												</td>
												<td scope="col" className="colformtd">
													#
												</td>
												<td className="columnformvalue" colspan="2">
													First
												</td>
											</tr>
											<tr>
												<td className="columnform" scope="row">
													Tanda Tangan Ketua Audit
												</td>
												<td className="colformtd">Mark</td>
												<td>Otto</td>
												<td>@mdo</td>
											</tr>
										</tbody>
									</table>
								</div>
								{/* <div className="pdf-footer">
									<p>
										Blauer See Delikatessen
										<br />
										Lützowplatz 456
										<br />
										Berlin, Germany, 10785
									</p>
								</div>
								<div className="addresses">
									<div className="for">
										<h3>Invoice For</h3>
										<p>
											Antonio Moreno
											<br />
											Naucalpan de Juárez
											<br />
											México D.F., Mexico, 53500
										</p>
									</div>

									<div className="from">
										<h3>From</h3>
										<p>
											Hanna Moos <br />
											Lützowplatz 456
											<br />
											Berlin, Germany, 10785
										</p>
										<p>
											Invoice ID: 23543
											<br />
											Invoice Date: 12.03.2014
											<br />
											Due Date: 27.03.2014
										</p>
									</div>
								</div> */}
								{/* 
								<div className="pdf-body">
									<div id="grid"></div>
									<p className="signature">
										Signature: ________________ <br />
										<br />
										Date: 12.03.2014
									</p>
								</div> */}
							</div>
						</div>
					</PDFExport>
				</div>
			</div>
		</>
	);
}

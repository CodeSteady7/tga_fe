import React from 'react';
import { format } from 'date-fns';
import FormLaporan from './FormLaporan';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import PageTemplate from './PageTemplate';
import Content from './content';
import Report from 'services/Report';

export default function List({ periods, dataAudits, handleEdit, handleDelete }) {
	const pdfExportComponent = React.useRef(null);

	const onDownload = (ID, document_no) => {
		Report.PdfAuditGenerate(ID)
		.then((response) => {
			console.log(response);
			const url = window.URL.createObjectURL(new Blob([response.data]));
			const link = document.createElement("a");
			link.href = url;
			link.setAttribute("download", `${document_no}.pdf`);
			document.body.appendChild(link);
			link.click();
		})
	};
	return (
		<>
			{/* <FormLaporan />; */}
			<div className="card-datatable">
				<table className="dt-multilingual table">
					<thead>
						<tr>
							<th>No</th>
							<th>No. Dok</th>
							<th>Tipe Audit</th>
							<th>Unit</th>
							<th>Ruang Lingkup</th>
							<th>Tanggal Audit</th>
							<th>Ketua Auditor</th>
							<th>Aksi</th>
						</tr>
					</thead>
					<tbody>
						{typeof dataAudits.data != 'undefined' && dataAudits.data.length > 0
							? dataAudits.data.map((prop, key) => {
									console.log('prop', prop);
									return (
										<tr key={key}>
											<td style={{fontSize: '13px'}} scope="row">{key + 1}</td>
											<td style={{fontSize: '13px'}}>{prop.document_no}</td>
											<td style={{fontSize: '13px'}}>{prop.audit_type}</td>
											<td style={{fontSize: '13px'}}>{prop.department.name}</td>
											<td style={{fontSize: '13px'}}>{prop.department.scope_type.toUpperCase().replace('_', ' ')}</td>
											<td style={{fontSize: '13px'}}>{format(new Date(prop.audit_at), 'dd-MM-yyyy')}</td>
											<td style={{fontSize: '13px'}}>{prop.auditor.name}</td>
											<td>
												{' '}
												<div className="dropdown">
													<a
														type="button"
														className="btn btn-sm dropdown-toggle hide-arrow py-0"
														data-bs-toggle="dropdown"
														id="dropdownMenuLink"
														aria-expanded="false"
													>
														<i data-feather="more-vertical">Click</i>
													</a>
													<div
														className="dropdown-menu dropdown-menu-end"
														aria-labelledby="dropdownMenuLink"
													>
														<a
															className="dropdown-item"
															href="#"
															type="button"
															onClick={e => onDownload(prop.id, prop.document_no)}
														>
															<span>Download</span>
														</a>
													</div>
												</div>
											</td>
										</tr>
									);
							  })
							: ''}
					</tbody>
				</table>
				<div
					style={{
						position: 'absolute',
						left: '-1000px',
						top: 0,
					}}
				>
					<PDFExport
						pageTemplate={PageTemplate}
						paperSize="A4"
						// margin="2cm"
						ref={pdfExportComponent}
					>
						<div>
							<Content />
						</div>
					</PDFExport>
				</div>
			</div>
		</>
	);
}

import React from 'react';
import { format } from 'date-fns';
import FormLaporan from './FormLaporan';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import PageTemplate from './PageTemplate';
import Content from './content';

export default function List({ periods,  dataAudits, handleEdit, handleDelete }) {
	const pdfExportComponent = React.useRef(null);

	const onDownload = () => {
		if (pdfExportComponent.current) {
			pdfExportComponent.current.save();
		}
	};
	return (
		<>
			{/* <FormLaporan />; */}
			<div className="card-datatable">
				<table className="dt-multilingual table">
					<thead>
						<tr>
							<th>No</th>
							<th style={{ fontFamily: 'Times' }}>No Dokumen</th>
							<th>Judul Audit</th>
							<th>Ketua Auditor</th>
							<th>Tanggal Audit</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>XX/XXXX/XXXX</td>
							<td>XXX</td>
							<td>XXXXX</td>
							<td>XXX</td>
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
											// href="/manager/laporanaudit/view"
											type="button"
											onClick={e => onDownload()}
										>
											<span>Download</span>
										</a>
										<a
											className="dropdown-item"
											href="#"
											type="button"
											onClick={e => handleEdit(data, e)}
										>
											<span>Edit</span>
										</a>
										<a
											className="dropdown-item"
											href="#"
											type="button"
											onClick={e => handleDelete(data, e)}
										>
											<span>Delete</span>
										</a>
									</div>
								</div>
							</td>
						</tr>
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

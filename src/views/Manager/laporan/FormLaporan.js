import React, { useState } from 'react';
import './FormLaporan.css';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import Content from './content';
import PageTemplate from './PageTemplate';

export default function FormLaporan() {
	const pdfExportComponent = React.useRef(null);

	return (
		<>
			<div id="example">
				{/* <div className="example-config">
					<button
						className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
						onClick={() => {
							if (pdfExportComponent.current) {
								pdfExportComponent.current.save();
							}
						}}
					>
						Export PDF
					</button>
				</div> */}

				<div
				// style={{
				// 	position: 'absolute',
				// 	left: '-1000px',
				// 	top: 0,
				// }}
				>
					<PDFExport
						pageTemplate={PageTemplate}
						paperSize="A4"
						margin="2cm"
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

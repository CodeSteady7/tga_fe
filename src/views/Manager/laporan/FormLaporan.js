import React, { useState } from 'react'
import './FormLaporan.css'
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import imgPoltek from '../../../assets/img/poltek.png'
export default function FormLaporan() {
  const [layoutSelection, setLayoutSelection] = useState({ text: "A4", value: "size-a4" });

  return (
    <>
      <div id="example">
        <div className="page-container hidden-on-narrow">
          <PDFExport>
            <div className={`pdf-page  A4 size-a4`}>
              <div className="inner-page">
                <div className="pdf-header">
                  <span className="company-logo">
                    {/* <table>
                      <tr style={{ textAlign: "center" }}>
                        <th><img src={imgPoltek} alt="pnl" style={{ width: '50' }} /></th>
                        <th><h4>KEMENTERIAN PENDIDIKAN DAN KEBUDAYAAN</h4>
                          <h2>POLITEKNIK NEGERI LHOKSEUMAWE</h2> <h5>Jalan Banda Aceh-Medan Km. 280,3 Buketrata, Lhokseumawe, 24301 PO.BOX 90 <br />
                            Telepon: (0645) 42785 Fax: 42785, Laman: www.pnl.ac.id
                          </h5></th>
                      </tr>
                      <tr>
                        <th><span>FORM LAPORAN
                          AUDIT MUTU INTERNAL
                          PROGRAM STUDI
                        </span></th>
                        <th></th>
                      </tr>
                    </table> */}
                  </span>
                  <span className="invoice-number">Invoice #23543</span>
                </div>
                <div className="pdf-footer">
                  <p>
                    Blauer See Delikatessen<br />
                    Lützowplatz 456<br />
                    Berlin, Germany,  10785
                  </p>
                </div>
                <div className="addresses">
                  <div className="for">
                    <h3>Invoice For</h3>
                    <p>
                      Antonio Moreno<br />
                      Naucalpan de Juárez<br />
                      México D.F., Mexico, 53500
                    </p>
                  </div>

                  <div className="from">
                    <h3>From</h3>
                    <p>
                      Hanna Moos <br />
                      Lützowplatz 456<br />
                      Berlin, Germany,  10785
                    </p>
                    <p>
                      Invoice ID: 23543<br />
                      Invoice Date: 12.03.2014<br />
                      Due Date: 27.03.2014
                    </p>
                  </div>
                </div>
                <div className="pdf-chart">
                  {/* <Chart style={{ height: 280 }}>
                    <ChartSeries>
                      <ChartSeriesItem
                        type="donut"
                        // data={sampleData}
                        categoryField="product"
                        field="share"
                      >
                        <ChartSeriesLabels
                          color="#fff"
                          background="none"
                        />
                      </ChartSeriesItem>
                    </ChartSeries>
                  </Chart> */}
                </div>
                <div className="pdf-body">
                  <div id="grid"></div>
                  <p className="signature">
                    Signature: ________________ <br /><br />
                    Date: 12.03.2014
                  </p>
                </div>
              </div>
            </div>
          </PDFExport>
        </div>
      </div >
    </>

  )
}

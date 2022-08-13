import React from 'react';
import imgPoltek from '../../../assets/img/poltek.png';
import './FormLaporan.css';

export default function Content() {
	return (
		<div>
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
										<span>POLITEKNIK NEGERI LHOKSEUMAWE</span>
										<p>
											Jalan Banda Aceh-Medan Km. 280,3 Buketrata, Lhokseumawe, 24301 PO.BOX 90
											Telepon: (0645) 42785 Fax: 42785, Laman: www.pnl.ac.id
										</p>
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
								<tr className="trColumn">
									<td className="columnform tdColumn" scope="col">
										Jurusan
									</td>
									<td className="columnformvalue tdColumn" colspan="4">
										First
									</td>
								</tr>
								<tr className="trColumn">
									<td className="columnform tdColumn" scope="col">
										Program Studi
									</td>
									<td className="columnformvalue tdColumn" colspan="4">
										First
									</td>
								</tr>
								<tr className="trColumn">
									<td className="columnform tdColumn" scope="col">
										Alamat
									</td>
									<td className="columnformvalue tdColumn" colspan="4"></td>
								</tr>
								<tr className="trColumn">
									<td className="columnform tdColumn" scope="col">
										Kaprodi
									</td>
									<td scope="col" className="colformtd tdColumn"></td>
									<td className="columnformvalue tdColumn" colspan="2"></td>
								</tr>
								<tr className="trColumn">
									<td className="columnform tdColumn" scope="col">
										Tanggal Audit
									</td>
									<td className="columnformvalue tdColumn" colspan="4"></td>
								</tr>
								<tr className="trColumn">
									<td className="columnform tdColumn" scope="col">
										Ketua Audit
									</td>
									<td scope="col" className="colformtd tdColumn"></td>
									<td className="columnformvalue tdColumn" colspan="2"></td>
								</tr>
								<tr className="trColumn">
									<td className="columnform tdColumn" scope="row">
										Tanda Tangan Ketua Audit
									</td>
									<td className="colformtd tdColumn"></td>
									<td className="colformtd tdColumn columnform">Tanda Tangan Kaprodi</td>
									<td className="colformtd tdColumn"></td>
								</tr>
							</tbody>
						</table>
					</div>

					<div className="part_II">
						<h4>
							II. TEMUAN POSITIF TP{' '}
							<span className="styleTemuan">
								(tuliskan temuan audit yang masuk dalam klasifikasi TP, kesesuaian atau prestasi
								yang ditemukan pada program studi)
							</span>{' '}
						</h4>
						<p>1. </p>
						<p>2. </p>
						<p>3. </p>
						<p>4. </p>
						<p>5. </p>
					</div>

					<div className="part_III">
						<span>III. RINGKASAN TEMUAN AUDIT</span>
						<div>
							<table className="formtable">
								{/* <table class="table table-bordered"> */}
								<tbody className="fontsizereport">
									<tr className="trColumn">
										<th className="columnform thColumn" rowspan="2" scope="row">
											No
										</th>
										<th className="colformtd thColumn" rowspan="2">
											Deskripsi / Uraian Temuan
										</th>
										<th className="colformtd thColumn columnform" colspan="3">
											Kategori Temuan (beri tanda v yang sesuai )
										</th>
										<th className="colformtd thColumn" rowspan="2">
											Nomer PTK
										</th>
									</tr>
									<tr className="trColumn">
										<th className="colformtd thColumn columnform">OB</th>
										<th className="colformtd thColumn">KTS Mi</th>
										<th className="colformtd thColumn">KTS Ma</th>
									</tr>
									<tr className="trColumn">
										<td className="columnform tdColumn" scope="row"></td>
										<td className="colformtd tdColumn"></td>
										<td className="colformtd tdColumn columnform"></td>
										<td className="colformtd tdColumn"></td>
										<td className="colformtd tdColumn"></td>
										<td className="colformtd tdColumn"></td>
									</tr>
									<tr className="trColumn">
										<td className="columnform tdColumn" scope="row"></td>
										<td className="colformtd tdColumn"></td>
										<td className="colformtd tdColumn columnform"></td>
										<td className="colformtd tdColumn"></td>
										<td className="colformtd tdColumn"></td>
										<td className="colformtd tdColumn"></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					<div className="part_IV">
						<div>
							<span>IV. KESIMPULAN AUDIT</span>
						</div>
						<div className="spacePartIV">
							<p>1. </p>
							<p>2. </p>
							<p>3. </p>
							<p>4. </p>
							<p>5. </p>
						</div>
					</div>

					<div className="part_V">
						<span>V. LAMPIRAN AUDIT</span>
						<div>
							<p>1. </p>
							<p>2. </p>
							<p>3. </p>
							<p>4. </p>
							<p>5. </p>
						</div>
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
		</div>
	);
}

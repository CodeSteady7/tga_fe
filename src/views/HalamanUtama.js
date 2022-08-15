import React from 'react';
import image from '../assets/img/pnl.jpg';
import '../assets/landingpage/style.css';

import logoPNL from '../assets/img/poltek.png';

function HalamanUtama() {
	return (
		<div>
			{/* <!-- ======= Header ======= --> */}
			<header id="header" className="fixed-top d-flex align-items-center">
				<div className="container d-flex align-items-center">
					<h3 className="logo me-auto">
						<a href="/">AMI PNL</a>
					</h3>
					{/* <!--  */}
					<a href="index.html" className="logo me-auto"></a>
					{/* --> */}

					<nav id="navbar" className="navbar">
						<ul>
							<li>
								<a href="index.html" className="active">
									Home
								</a>
							</li>

							<li>
								<a href="blog.html">Tujuan</a>
							</li>

							<li>
								<a href="contact.html">Monitoring</a>
							</li>
							<li>
								<a href="/login" className="getstarted">
									Login
								</a>
							</li>
						</ul>
						<i className="bi bi-list mobile-nav-toggle"></i>
					</nav>
					{/* <!-- .navbar --> */}
				</div>
			</header>
			{/* <!-- End Header --> */}

			{/* <!-- ======= Hero Section ======= --> */}
			<section id="hero">
				<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
					<div class="carousel-indicators">
						<button
							type="button"
							data-bs-target="#carouselExampleDark"
							data-bs-slide-to="0"
							class="active"
							aria-current="true"
							aria-label="Slide 1"
						></button>
						<button
							type="button"
							data-bs-target="#carouselExampleDark"
							data-bs-slide-to="1"
							aria-label="Slide 2"
						></button>
						<button
							type="button"
							data-bs-target="#carouselExampleDark"
							data-bs-slide-to="2"
							aria-label="Slide 3"
						></button>
					</div>
					<div class="carousel-inner">
						<div class="carousel-item active" data-bs-interval="10000">
							<img src={image} class="d-block w-100" alt="..." />
							<div class="carousel-caption d-none d-md-block">
								<h5 class="text-white">First slide label</h5>
								<p>Some representative placeholder content for the first slide.</p>
							</div>
						</div>
						<div class="carousel-item" data-bs-interval="2000">
							<img src="..." class="d-block w-100" alt="..." />
							<div class="carousel-caption d-none d-md-block">
								<h5>Second slide label</h5>
								<p>Some representative placeholder content for the second slide.</p>
							</div>
						</div>
						<div class="carousel-item">
							<img src="..." class="d-block w-100" alt="..." />
							<div class="carousel-caption d-none d-md-block">
								<h5>Third slide label</h5>
								<p>Some representative placeholder content for the third slide.</p>
							</div>
						</div>
					</div>
					<button
						class="carousel-control-prev"
						type="button"
						data-bs-target="#carouselExampleDark"
						data-bs-slide="prev"
					>
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Previous</span>
					</button>
					<button
						class="carousel-control-next"
						type="button"
						data-bs-target="#carouselExampleDark"
						data-bs-slide="next"
					>
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Next</span>
					</button>
				</div>
			</section>
			{/* <!-- End Hero --> */}

			<main id="main">
				{/* <!-- ======= About Section ======= --> */}
				<section id="about" className="about">
					<div className="container">
						<div className="row ">
							<div className="col-lg-12">
								<h1>
									<strong>Selamat Datang dan Berpartisipasi</strong>
								</h1>
								<h3>
									Audit Mutu Internal (AMI) adalah bagian dari sistem implementasi penjamin mutu
									akademik internal (SPMI) yang terkait dengan audit, evaluasi dan monitoring
									terhadap seluruh program, kegiatan dan capaian kerja seluruh unit kerja di
									lingkungan Polteknik Negeri Lhokseumawe. Setiap unit kerja “wajib” mengikuti
									proses AMI yang dilaksanakan secara terjadwal sehingga hasilnya dapat digunakan
									untuk meningkatkan capaian pembangunan mutu akademik Polteknik Negeri Lhokseumawe
									saat ini dan nanti
								</h3>
							</div>
						</div>
					</div>
				</section>
				{/* <!-- End About Section --> */}

				{/* <!-- ======= Services Section ======= --> */}
				<section id="services" className="services">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<div className="icon-box">
									<i className="bi bi-briefcase"></i>
									<h4>
										<a href="#">Memberikan Nilai Tambah</a>
									</h4>
									<p>
										Memberikan nilai tambah dan memperbaiki kinerja (kegiatan operasional) akademik
										Unsyiah
									</p>
								</div>
							</div>
							<div className="col-md-6 mt-4 mt-md-0">
								<div className="icon-box">
									<i className="bi bi-card-checklist"></i>
									<h4>
										<a href="#">Mengetahui Upaya</a>
									</h4>
									<p>
										Mengetahui bahwa upaya untuk mempertahakan, meningkatkan mutu dan standar
										akademik telah tepat dan efekti
									</p>
								</div>
							</div>
							<div className="col-md-6 mt-4 mt-md-0">
								<div className="icon-box">
									<i className="bi bi-bar-chart"></i>
									<h4>
										<a href="#">Mengidentifikasi Lingkup</a>
									</h4>
									<p>
										Mengidentifikasi lingkup perbaikan dan pengembangan profesional secara
										berkelanjutan berdasarkan evaluasi diri
									</p>
								</div>
							</div>
							<div className="col-md-6 mt-4 mt-md-0">
								<div className="icon-box">
									<i className="bi bi-binoculars"></i>
									<h4>
										<a href="#">Nemo Enim</a>
									</h4>
									<p>
										Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* <!-- End Services Section --> */}
			</main>
			{/* <!-- End #main --> */}

			{/* <!-- ======= Footer ======= --> */}
			<footer id="footer">
				<div className="footer-top">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-md-6">
								<div className="footer-info  justify-content-between">
									<h4>TENTANG KAMI</h4>
									<p>
										Kegiatan untuk memastikan kesesuian antara keberadaan Sistem Penjaminan Mutu
										Akademik (SPMA) dengan pelaksanaannya oleh unit pelaksana akademik, yang terdiri
										dari audit sistem dan audit kepatuhan
									</p>
								</div>
							</div>

							<div className="col-lg-3 col-md-6 footer-links">
								<h4>LOKASI</h4>
								<p>
									Jl. Banda Aceh-Medan Km. 280,3, Buketrata, Mesjid Punteut, Blang Mangat, Kota
									Lhokseumawe, 24301, Aceh, Indonesia
								</p>
							</div>

							<div className="col-lg-4 col-md-6 footer-newsletter text-center ">
								<h4>Power By</h4>
								<img src={logoPNL} alt="" style={{ width: '200', marginBottom: '15' }} />
								<p>
									Lembaga Pengembangan Pendidikan <br /> dan Penjamin Mutu (LP3M)
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="credits">
						Copyright <a href="http://pnl.ac.id/">Politeknik Negeri Lhokseumawe</a>
					</div>
				</div>
			</footer>
			{/* <!-- End Footer --> */}

			<a href="#" className="back-to-top d-flex align-items-center justify-content-center">
				<i className="bi bi-arrow-up-short"></i>
			</a>
		</div>
	);
}

export default HalamanUtama;

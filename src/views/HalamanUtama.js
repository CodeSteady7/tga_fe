import React from "react"
import image from "../assets/img/pnl.jpg"
// import "../assets/assetsLandingpages/vendor/animate.css/animate.min.css"
// import "../assets/assetsLandingpages/vendor/bootstrap/css/bootstrap.min.css"
import "../assets/assetsLandingpages/vendor/bootstrap-icons/bootstrap-icons.css"
// import "../assets/assetsLandingpages/vendor/boxicons/css/boxicons.min.css"
// import "../assets/assetsLandingpages/vendor/glightbox/css/glightbox.min.css"
// import "../assets/assetsLandingpages/vendor/remixicon/remixicon.css"
// import "../assets/assetsLandingpages/vendor/swiper/swiper-bundle.min.css"
import "../assets/assetsLandingpages/css/style.css"

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
				<div
					id="carouselExampleDark"
					class="carousel carousel-dark slide"
					data-bs-ride="carousel"
				>
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
									untuk meningkatkan capaian pembangunan mutu akademik Polteknik Negeri
									Lhokseumawe saat ini dan nanti
								</h3>
							</div>
							{/* <div className="col-lg-6 pt-4 pt-lg-0">
								<p>
									Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
									in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
									Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
									deserunt mollit anim id est laborum
								</p>
								<ul>
									<li>
										<i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea
										commodo consequa
									</li>
									<li>
										<i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit
										in voluptate velit
									</li>
									<li>
										<i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea
										commodo consequat. Duis aute irure dolor in reprehenderit in
									</li>
								</ul>
								<p className="fst-italic">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
								</p>
							</div> */}
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
										<a href="#">Mengidentifikasi Lingkup </a>
									</h4>
									<p>
										Mengidentifikasi lingkup perbaikan dan pengembangan profesional secara
										berkelanjutan berdasarkan evaluasi diri
									</p>
								</div>
							</div>
							<div className="col-md-6 mt-4 mt-md-0">
								<div className="icon-box">
									<i className="bi bi-card-checklist"></i>
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
									<i className="bi bi-bar-chart"></i>
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
							<div className="col-md-6 mt-4 mt-md-0">
								<div className="icon-box">
									<i className="bi bi-brightness-high"></i>
									<h4>
										<a href="#">Magni Dolore</a>
									</h4>
									<p>
										At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
										praesentium voluptatum deleniti atque
									</p>
								</div>
							</div>
							<div className="col-md-6 mt-4 mt-md-0">
								<div className="icon-box">
									<i className="bi bi-calendar4-week"></i>
									<h4>
										<a href="#">Eiusmod Tempor</a>
									</h4>
									<p>
										Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore,
										cum soluta nobis est eligendi
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* <!-- End Services Section --> */}

				{/* <!-- ======= Portfolio Section ======= --> */}
				<section id="portfolio" className="portfolio">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 d-flex justify-content-center">
								<ul id="portfolio-flters">
									<li data-filter="*" className="filter-active">
										All
									</li>
									<li data-filter=".filter-app">App</li>
									<li data-filter=".filter-card">Card</li>
									<li data-filter=".filter-web">Web</li>
								</ul>
							</div>
						</div>

						<div className="row portfolio-container">
							<div className="col-lg-4 col-md-6 portfolio-item filter-app">
								<div className="portfolio-wrap">
									<img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
									<div className="portfolio-info">
										<h4>App 1</h4>
										<p>App</p>
										<div className="portfolio-links">
											<a
												href="assets/img/portfolio/portfolio-1.jpg"
												data-gallery="portfolioGallery"
												className="portfolio-lightbox"
												title="App 1"
											>
												<i className="bx bx-plus"></i>
											</a>
											<a
												href="portfolio-details.html"
												className="portfolio-details-lightbox"
												data-glightbox="type: external"
												title="Portfolio Details"
											>
												<i className="bx bx-link"></i>
											</a>
										</div>
									</div>
								</div>
							</div>

							<div className="col-lg-4 col-md-6 portfolio-item filter-web">
								<div className="portfolio-wrap">
									<img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" />
									<div className="portfolio-info">
										<h4>Web 3</h4>
										<p>Web</p>
										<div className="portfolio-links">
											<a
												href="assets/img/portfolio/portfolio-2.jpg"
												data-gallery="portfolioGallery"
												className="portfolio-lightbox"
												title="Web 3"
											>
												<i className="bx bx-plus"></i>
											</a>
											<a
												href="portfolio-details.html"
												className="portfolio-details-lightbox"
												data-glightbox="type: external"
												title="Portfolio Details"
											>
												<i className="bx bx-link"></i>
											</a>
										</div>
									</div>
								</div>
							</div>

							<div className="col-lg-4 col-md-6 portfolio-item filter-app">
								<div className="portfolio-wrap">
									<img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" />
									<div className="portfolio-info">
										<h4>App 2</h4>
										<p>App</p>
										<div className="portfolio-links">
											<a
												href="assets/img/portfolio/portfolio-3.jpg"
												data-gallery="portfolioGallery"
												className="portfolio-lightbox"
												title="App 2"
											>
												<i className="bx bx-plus"></i>
											</a>
											<a
												href="portfolio-details.html"
												className="portfolio-details-lightbox"
												data-glightbox="type: external"
												title="Portfolio Details"
											>
												<i className="bx bx-link"></i>
											</a>
										</div>
									</div>
								</div>
							</div>

							<div className="col-lg-4 col-md-6 portfolio-item filter-card">
								<div className="portfolio-wrap">
									<img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="" />
									<div className="portfolio-info">
										<h4>Card 2</h4>
										<p>Card</p>
										<div className="portfolio-links">
											<a
												href="assets/img/portfolio/portfolio-4.jpg"
												data-gallery="portfolioGallery"
												className="portfolio-lightbox"
												title="Card 2"
											>
												<i className="bx bx-plus"></i>
											</a>
											<a
												href="portfolio-details.html"
												className="portfolio-details-lightbox"
												data-glightbox="type: external"
												title="Portfolio Details"
											>
												<i className="bx bx-link"></i>
											</a>
										</div>
									</div>
								</div>
							</div>

							<div className="col-lg-4 col-md-6 portfolio-item filter-web">
								<div className="portfolio-wrap">
									<img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" />
									<div className="portfolio-info">
										<h4>Web 2</h4>
										<p>Web</p>
										<div className="portfolio-links">
											<a
												href="assets/img/portfolio/portfolio-5.jpg"
												data-gallery="portfolioGallery"
												className="portfolio-lightbox"
												title="Web 2"
											>
												<i className="bx bx-plus"></i>
											</a>
											<a
												href="portfolio-details.html"
												className="portfolio-details-lightbox"
												data-glightbox="type: external"
												title="Portfolio Details"
											>
												<i className="bx bx-link"></i>
											</a>
										</div>
									</div>
								</div>
							</div>

							<div className="col-lg-4 col-md-6 portfolio-item filter-app">
								<div className="portfolio-wrap">
									<img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt="" />
									<div className="portfolio-info">
										<h4>App 3</h4>
										<p>App</p>
										<div className="portfolio-links">
											<a
												href="assets/img/portfolio/portfolio-6.jpg"
												data-gallery="portfolioGallery"
												className="portfolio-lightbox"
												title="App 3"
											>
												<i className="bx bx-plus"></i>
											</a>
											<a
												href="portfolio-details.html"
												className="portfolio-details-lightbox"
												data-glightbox="type: external"
												title="Portfolio Details"
											>
												<i className="bx bx-link"></i>
											</a>
										</div>
									</div>
								</div>
							</div>

							<div className="col-lg-4 col-md-6 portfolio-item filter-card">
								<div className="portfolio-wrap">
									<img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" />
									<div className="portfolio-info">
										<h4>Card 1</h4>
										<p>Card</p>
										<div className="portfolio-links">
											<a
												href="assets/img/portfolio/portfolio-7.jpg"
												data-gallery="portfolioGallery"
												className="portfolio-lightbox"
												title="Card 1"
											>
												<i className="bx bx-plus"></i>
											</a>
											<a
												href="portfolio-details.html"
												className="portfolio-details-lightbox"
												data-glightbox="type: external"
												title="Portfolio Details"
											>
												<i className="bx bx-link"></i>
											</a>
										</div>
									</div>
								</div>
							</div>

							<div className="col-lg-4 col-md-6 portfolio-item filter-card">
								<div className="portfolio-wrap">
									<img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" />
									<div className="portfolio-info">
										<h4>Card 3</h4>
										<p>Card</p>
										<div className="portfolio-links">
											<a
												href="assets/img/portfolio/portfolio-8.jpg"
												data-gallery="portfolioGallery"
												className="portfolio-lightbox"
												title="Card 3"
											>
												<i className="bx bx-plus"></i>
											</a>
											<a
												href="portfolio-details.html"
												className="portfolio-details-lightbox"
												data-glightbox="type: external"
												title="Portfolio Details"
											>
												<i className="bx bx-link"></i>
											</a>
										</div>
									</div>
								</div>
							</div>

							<div className="col-lg-4 col-md-6 portfolio-item filter-web">
								<div className="portfolio-wrap">
									<img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" />
									<div className="portfolio-info">
										<h4>Web 3</h4>
										<p>Web</p>
										<div className="portfolio-links">
											<a
												href="assets/img/portfolio/portfolio-9.jpg"
												data-gallery="portfolioGallery"
												className="portfolio-lightbox"
												title="Web 3"
											>
												<i className="bx bx-plus"></i>
											</a>
											<a
												href="portfolio-details.html"
												className="portfolio-details-lightbox"
												data-glightbox="type: external"
												title="Portfolio Details"
											>
												<i className="bx bx-link"></i>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* <!-- End Portfolio Section --> */}
			</main>
			{/* <!-- End #main --> */}

			{/* <!-- ======= Footer ======= --> */}
			<footer id="footer">
				<div className="footer-top">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-md-6">
								<div className="footer-info">
									<h3>Sailor</h3>
									<p>
										A108 Adam Street <br />
										NY 535022, USA
										<br />
										<br />
										<strong>Phone:</strong> +1 5589 55488 55
										<br />
										<strong>Email:</strong> info@example.com
										<br />
									</p>
									<div className="social-links mt-3">
										<a href="#" className="twitter">
											<i className="bx bxl-twitter"></i>
										</a>
										<a href="#" className="facebook">
											<i className="bx bxl-facebook"></i>
										</a>
										<a href="#" className="instagram">
											<i className="bx bxl-instagram"></i>
										</a>
										<a href="#" className="google-plus">
											<i className="bx bxl-skype"></i>
										</a>
										<a href="#" className="linkedin">
											<i className="bx bxl-linkedin"></i>
										</a>
									</div>
								</div>
							</div>

							<div className="col-lg-2 col-md-6 footer-links">
								<h4>Useful Links</h4>
								<ul>
									<li>
										<i className="bx bx-chevron-right"></i> <a href="#">Home</a>
									</li>
									<li>
										<i className="bx bx-chevron-right"></i> <a href="#">About us</a>
									</li>
									<li>
										<i className="bx bx-chevron-right"></i> <a href="#">Services</a>
									</li>
									<li>
										<i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a>
									</li>
									<li>
										<i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a>
									</li>
								</ul>
							</div>

							<div className="col-lg-3 col-md-6 footer-links">
								<h4>Our Services</h4>
								<ul>
									<li>
										<i className="bx bx-chevron-right"></i> <a href="#">Web Design</a>
									</li>
									<li>
										<i className="bx bx-chevron-right"></i> <a href="#">Web Development</a>
									</li>
									<li>
										<i className="bx bx-chevron-right"></i> <a href="#">Product Management</a>
									</li>
									<li>
										<i className="bx bx-chevron-right"></i> <a href="#">Marketing</a>
									</li>
									<li>
										<i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a>
									</li>
								</ul>
							</div>

							<div className="col-lg-4 col-md-6 footer-newsletter">
								<h4>Our Newsletter</h4>
								<p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
								<form action="" method="post">
									<input type="email" name="email" />
									<input type="submit" value="Subscribe" />
								</form>
							</div>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="copyright">
						&copy; Copyright{" "}
						<strong>
							<span>Sailor</span>
						</strong>
						. All Rights Reserved
					</div>
					<div className="credits">
						{/* <!-- All the links in the footer should remain intact. --> */}
						{/* <!-- You can delete the links only if you purchased the pro version. --> */}
						{/* <!-- Licensing information: https://bootstrapmade.com/license/ --> */}
						{/* <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/sailor-free-bootstrap-theme/ --> */}
						Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
					</div>
				</div>
			</footer>
			{/* <!-- End Footer --> */}

			<a
				href="#"
				className="back-to-top d-flex align-items-center justify-content-center"
			>
				<i className="bi bi-arrow-up-short"></i>
			</a>
		</div>
	)
}

export default HalamanUtama

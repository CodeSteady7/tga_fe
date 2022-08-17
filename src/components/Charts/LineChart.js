import React, { useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { Calendar } from 'react-feather';
Chart.register(...registerables);

export default function LineChart({ categoryTitle, categoryLabel, lineBarLabel, lineBarData }) {
	// let today = new Date();
	// let date = today.toLocaleDateString('id-ID');

	return (
		<>
			<div class="card">
				<div class="card-header d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column">
					<div class="header-left">
						<h4 class="card-title">{categoryTitle}</h4>
					</div>
					<div class="header-right d-flex align-items-center mt-sm-0 mt-1">
						{/* <Calendar color="#777289" size={15} /> */}
						{/* <input type="text" class="form-control flat-picker border-0 shadow-none bg-transparent pe-0" placeholder={date} disabled /> */}
					</div>
				</div>
				<div class="card-body">
					<Bar
						data={{
							labels: lineBarLabel,
							datasets: [
								{
									label: categoryLabel,
									data: [lineBarData],
									backgroundColor: ['#28DAC6'],
									borderColor: ['#28DAC6'],
									borderWidth: 3,
									barThickness: 12,
									hoverOffset: 10,
								},
							],
						}}
						height={400}
						width={600}
						options={{
							maintainAspectRatio: true,
							scales: {
								yAxes: [{}],
							},
						}}
					/>
				</div>
			</div>
		</>
	);
}

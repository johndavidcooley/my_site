import React, { Component } from 'react';
import { Link } from'react-router';
import Chart from 'chart.js';


export default class Line extends Component {

	constructor(props) {
		super(props);
	};





	componentDidMount() {

	var data = {
	    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	    datasets: [
	        {
	            label: '2013',
	            fill: false,
	            lineTension: 0.4,
	            backgroundColor: "#FF6384",
	            borderColor: "#FF6384",
	            borderCapStyle: 'butt',
	            borderDash: [],
	            borderDashOffset: 0.0,
	            borderJoinStyle: 'miter',
	            pointBorderColor: "#FF6384",
	            pointBackgroundColor: "#fff",
	            pointBorderWidth: 1,
	            pointHoverRadius: 5,
	            pointHoverBackgroundColor: "#FF6384",
	            pointHoverBorderColor: "#000000",
	            pointHoverBorderWidth: 2,
	            pointRadius: 1,
	            pointHitRadius: 10,
	            data: [38.9, 44.4, 70.4, 62.2, 50.4, 60.4, 26.7, 63.9, 54.9, 62.1, 55.2, 18.2],
	        }, 
	        {
	            label: 2014,
	            fill: false,
	            lineTension: 0.4,
	            backgroundColor: "#36A2EB",
	            borderColor: "#36A2EB",
	            borderCapStyle: 'butt',
	            borderDash: [],
	            borderDashOffset: 0.0,
	            borderJoinStyle: 'miter',
	            pointBorderColor: "#36A2EB",
	            pointBackgroundColor: "#fff",
	            pointBorderWidth: 1,
	            pointHoverRadius: 5,
	            pointHoverBackgroundColor: "#36A2EB",
	            pointHoverBorderColor: "#000000",
	            pointHoverBorderWidth: 2,
	            pointRadius: 1,
	            pointHitRadius: 10,
	            data: [8.02, 22.7, 47.1, 26.8, 36.6, 40.1, 80.2, 26.8, 79.6, 16.5, 4.87, 26.2],
	        },
	        {
	            label: 2015,
	            fill: false,
	            lineTension: 0.4,
	            backgroundColor: "#FFCE56",
	            borderColor: "#FFCE56",
	            borderCapStyle: 'butt',
	            borderDash: [],
	            borderDashOffset: 0.0,
	            borderJoinStyle: 'miter',
	            pointBorderColor: "#FFCE56",
	            pointBackgroundColor: "#fff",
	            pointBorderWidth: 1,
	            pointHoverRadius: 5,
	            pointHoverBackgroundColor: "#FFCE56",
	            pointHoverBorderColor: "#000000",
	            pointHoverBorderWidth: 2,
	            pointRadius: 1,
	            pointHitRadius: 10,
	            data: [48.2, 33.1, 64.9, 86.3, 8.42, 96, 94.7, 21.4, 69.1, 74.4, 53.1, 8.94],
	        },
	        {
	            label: 2016,
	            fill: false,
	            lineTension: 0.4,
	            backgroundColor: '#4BC0C0',
	            borderColor: '#4BC0C0',
	            borderCapStyle: 'butt',
	            borderDash: [],
	            borderDashOffset: 0.0,
	            borderJoinStyle: 'miter',
	            pointBorderColor: '#4BC0C0',
	            pointBackgroundColor: "#fff",
	            pointBorderWidth: 1,
	            pointHoverRadius: 5,
	            pointHoverBackgroundColor: '#4BC0C0',
	            pointHoverBorderColor: '#000000',
	            pointHoverBorderWidth: 2,
	            pointRadius: 1,
	            pointHitRadius: 10,
	            data: [39.2, 100, 72.4, 142, 124, 71.8, 37.9, null, null, null, null, null],
	        }
	    ]
	};

		var options = [];
		var ctx = this.canvas.getContext("2d");
		var myLineChart = new Chart(ctx, {
    		type: 'line',
    		data: data,
    		options: options
});
	}





	render() {
		return (
			<div className='line'>
				<div className='chart-title'>
					Miles I've Run Each Month
				</div>
				<div>
					<canvas ref={canvas => this.canvas = canvas} width="500" height="500"></canvas>
				</div>
			</div>
		)
	}
}
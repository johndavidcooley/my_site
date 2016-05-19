import React, { Component } from 'react';
import { Link } from'react-router';
import Chart from 'chart.js';

export default class Donut extends Component {

	constructor(props) {
		super(props);
	};





	componentDidMount() {

	var data = {
	    labels: [
	        "Red",
	        "Green",
	        "Yellow"
	    ],
	    datasets: [
	        {
	            data: [300, 50, 100],
	            backgroundColor: [
	                "#FF6384",
	                "#36A2EB",
	                "#FFCE56"
	            ],
	            hoverBackgroundColor: [
	                "#FF6384",
	                "#36A2EB",
	                "#FFCE56"
	            ]
	        }]
	};

		var options = {
			cutoutPercentage: 50
		};
		var ctx = this.canvas.getContext("2d");
		var myLineChart = new Chart(ctx, {
    		type: 'pie',
    		data: data,
    		options: options
});
	}





	render() {
		return (
			<div>
				<div>
					<Link to="/">Back Home</Link>
				</div>
				<div>
					Donut Chart
				</div>
				<div className="pie">
					<canvas ref={canvas => this.canvas = canvas} width="500" height="500"></canvas>
				</div>
			</div>
		)
	}
}
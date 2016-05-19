import React, { Component } from 'react';
import { Link } from'react-router';
import Chart from 'chart.js';

export default class Line extends Component {

	constructor(props) {
		super(props);
	};





	componentDidMount() {

	var data = {
	    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
	    datasets: [
	        {
	            label: "My First dataset",
	            backgroundColor: "rgba(179,181,198,0.2)",
	            borderColor: "rgba(179,181,198,1)",
	            pointBackgroundColor: "rgba(179,181,198,1)",
	            pointBorderColor: "#fff",
	            pointHoverBackgroundColor: "#fff",
	            pointHoverBorderColor: "rgba(179,181,198,1)",
	            data: [65, 59, 90, 81, 56, 55, 40]
	        },
	        {
	            label: "My Second dataset",
	            backgroundColor: "rgba(255,99,132,0.2)",
	            borderColor: "rgba(255,99,132,1)",
	            pointBackgroundColor: "rgba(255,99,132,1)",
	            pointBorderColor: "#fff",
	            pointHoverBackgroundColor: "#fff",
	            pointHoverBorderColor: "rgba(255,99,132,1)",
	            data: [28, 48, 40, 19, 96, 27, 100]
	        }
	    ]
	};

		var options = [];
		var ctx = this.canvas.getContext("2d");
		var myLineChart = new Chart(ctx, {
    		type: 'radar',
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
					Radar Chart
				</div>
				<div className="radar">
					<canvas ref={canvas => this.canvas = canvas} width="500" height="500"></canvas>
				</div>
			</div>
		)
	}
}
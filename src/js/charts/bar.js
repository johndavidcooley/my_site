import React, { Component } from 'react';
import { Link } from'react-router';
import Chart from 'chart.js';


export default class Bar extends Component {

	constructor(props) {
		super(props);
	}





	componentDidMount() {

	var data = {
	    labels: ["January", "February", "March", "April", "May", "June", "July"],
	    datasets: [
	        {
	            label: "My First dataset",
	            backgroundColor: "rgba(255,99,132,0.2)",
	            borderColor: "rgba(255,99,132,1)",
	            borderWidth: 1,
	            hoverBackgroundColor: "rgba(255,99,132,0.4)",
	            hoverBorderColor: "rgba(255,99,132,1)",
	            data: [65, 59, 80, 81, 56, 55, 40],
	        }
	    ]
	};

		var options = [];
		var ctx = this.canvas.getContext("2d");
		var myLineChart = new Chart(ctx, {
    		type: 'bar',
    		data: data,
    		options: options
});
	}





	render() {
		return (
			<div className='bar'>
				<div>
					Bar Chart
				</div>
				<div>
					<canvas ref={canvas => this.canvas = canvas} width="500" height="500"></canvas>
				</div>
			</div>
		)
	}
}
import React, { Component } from 'react';
import { Link } from'react-router';
import Chart from 'chart.js';

export default class Line extends Component {

	constructor(props) {
		super(props);
	};





	componentDidMount() {

	var data = {
	    labels: ['Soccer', 'NFL', 'NBA', 'NHL', 'MLB', 'NCAA Football', 'NCAA Basketball', 'Golf', 'Tennis',],
	    datasets: [
	        {
	            label: 'On a Scale of 1 to 10',
	            backgroundColor: 'rgba(38,199,113,0.2)',
	            borderColor: '#26C771',
	            pointBackgroundColor: '#2633C7',
	            pointBorderColor: "#fff",
	            pointHoverBackgroundColor: "#fff",
	            pointHoverBorderColor: '#FA6800',
	            data: [0, 4, 5, 7, 3, 10, 8, 8, 5]
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
			<div className='radar'>
				<div className='chart-title'>
					My Interest Level In Various Sports
				</div>
				<div>
					<canvas ref={canvas => this.canvas = canvas} width="500" height="500"></canvas>
				</div>
			</div>
		)
	}
}
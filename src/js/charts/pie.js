import React, { Component } from 'react';
import { Link } from'react-router';
import Chart from 'chart.js';


export default class Pie extends Component {

	constructor(props) {
		super(props);
	};





	componentDidMount() {

	var data = {
	    labels: [
	        'Coding',
	        'Sleeping',
	        'Running',
	        'Eating',
	        'Netflix',
	        'Drinking Craft Beer',
	        'Sitting In Traffic'
	    ],
	    datasets: [
	        {
	            data: [52, 60, 12, 14, 10, 10, 10],
	            backgroundColor: [
	                '#4DD68F',
	                '#63D6D6',
	                '#A39F17',
	                '#FF6200',
	                '#B9090B',
	                '#FFC400',
	                '#4A0F0F'
	            ],
	            hoverBackgroundColor: [
	            '#61B2A7',
	            '#61B2A7',
	            '#61B2A7',
	            '#61B2A7',
	            '#61B2A7',
	            '#61B2A7',
	            '#61B2A7'
	            ]
	        }]
	};

		var options = [];
		var ctx = this.canvas.getContext("2d");
		var myLineChart = new Chart(ctx, {
    		type: 'pie',
    		data: data,
    		options: options
});
	}





	render() {
		return (
			<div className='pie'>
				<div className='chart-title'>
					A Typical Week For Me
				</div>
				<div>
					<canvas ref={canvas => this.canvas = canvas} width="500" height="500"></canvas>
				</div>
			</div>
		)
	}
}
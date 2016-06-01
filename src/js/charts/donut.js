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
	        'Phish',
	        'Umphrey\'s McGee',
	        'Widespread Panic',
	        'Moon Taxi',
	        'Led Zeppelin',
	        'Jimmy Buffett',
	        'Mingo Fishtrap',
	        'The Devil Makes Three',
	    ],
	    datasets: [
	        {
	            data: [23, 22, 10, 14, 8, 5, 8, 10],
	            backgroundColor: [
					'#02B3C5',
					'#01772D',
					'#000044',
					'#FF7109',
					'#000000',
					'#FCBB01',
					'#D74C49',
					'#752123',
	            ],
	            hoverBackgroundColor: [
					'#61B2A7',
					'#61B2A7',
					'#61B2A7',
					'#61B2A7',
					'#61B2A7',
					'#61B2A7',
					'#61B2A7',
					'#61B2A7',
	            ]
	        }]
	};

		var options = {
			cutoutPercentage: 40
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
			<div className='doughnut'>
				<div className='chart-title'>
					Music I Listen To While Coding
				</div>
				<div>
					<canvas ref={canvas => this.canvas = canvas} width="500" height="500"></canvas>
				</div>
			</div>
		)
	}
}
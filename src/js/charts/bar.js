import React, { Component } from 'react';
import { Link } from'react-router';
import Chart from 'chart.js';


export default class Bar extends Component {

	constructor(props) {
		super(props);
	}





	componentDidMount() {

	var data = {
	    labels: ['IPA', 'Double IPA', 'Imperial Stout', 'Pale Ale', 'Pilsner', 'Saison', 'Berliner Weisse', 'Wild Ale'],
	    datasets: [
	        {
	            label: "Number of Different Beers I've Had",
	            backgroundColor: '#0B2E82',
	            borderColor: '#FB5316',
	            borderWidth: 1,
	            hoverBackgroundColor: '#FB5316',
	            hoverBorderColor: '#0B2E82',
	            data: [246, 110, 110, 102, 35, 63, 31, 67],
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
				<div className='chart-title'>
					My Favorite Craft Beer Styles
				</div>
				<div>
					<canvas ref={canvas => this.canvas = canvas} width="500" height="500"></canvas>
				</div>
			</div>
		)
	}
}
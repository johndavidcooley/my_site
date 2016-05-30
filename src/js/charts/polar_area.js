import React, { Component } from 'react';
import { Link } from'react-router';
import Chart from 'chart.js';


export default class PolarArea extends Component {

	constructor(props) {
		super(props);
	};





	componentDidMount() {

	var data = {
	    datasets: [{
	        data: [
	            11,
	            16,
	            7,
	            3,
	            14
	        ],
	        backgroundColor: [
	            "#FF6384",
	            "#4BC0C0",
	            "#FFCE56",
	            "#E7E9ED",
	            "#36A2EB"
	        ],
	        label: 'My dataset' // for legend
	    }],
	    labels: [
	        "Red",
	        "Green",
	        "Yellow",
	        "Grey",
	        "Blue"
	    ]
	};

		var options = [];
		var ctx = this.canvas.getContext("2d");
		var myLineChart = new Chart(ctx, {
    		type: 'polarArea',
    		data: data,
    		options: options
});
	}





	render() {
		return (
			<div className='polar'>
				<div>
					Polar Area Chart
				</div>
				<div>
					<canvas ref={canvas => this.canvas = canvas} width="500" height="500"></canvas>
				</div>
			</div>
		)
	}
}
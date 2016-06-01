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
	            35,
	            28,
	            17,
	            20,
	            0
	        ],
	        backgroundColor: [
				'#F48024',
				'#EA4335',
				'#EDB000',
				'#4285F4',
				'#34A853'
	        ],
	        label: 'My dataset' // for legend
	    }],
	    labels: [
	        'Stack Overflow',
	        'Google',
	        'Rubber Duck Debugging',
	        'Asking For Help',
	        'Giving Up',
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
				<div className='chart-title'>
					How I Get Through Debugging Issues
				</div>
				<div>
					<canvas ref={canvas => this.canvas = canvas} width="500" height="500"></canvas>
				</div>
			</div>
		)
	}
}
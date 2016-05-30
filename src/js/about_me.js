import React, { Component } from 'react';


import Line from './charts/line';
import Bar from './charts/bar';
import PolarArea from './charts/polar_area';
import Radar from './charts/radar';
import Pie from './charts/pie';
import Donut from './charts/donut';


export default class AboutMe extends Component {

	render() {
		return (
			<div className='about-me'>
				<Line className='chart' />
				<Bar className='chart' />
				<PolarArea className='chart' />
				<Radar className='chart' />
				<Pie className='chart' />
				<Donut className='chart' />
			</div>
		)
	}
}
import React, { Component } from 'react';

export default class WhatsNext extends Component {

	render() {
		return (
			<div className='whats-next'>
				<div className='top-text'>
					In the coming future, I plan to dive deeper into JavaScript and the React framework.
					I want to continually challenge myself to master React and improve my JS chops through various personal projects.
					In addition to React and JavaScript in general, I plan to tackle the MEAN Stack, as well as a number of different JavaScript frameworks, libraries, and testing frameworks.
				</div>
				<div className='now-and-then'>
					<div className='learning-now'>
						Currently Learning...
						<ul className='learning-now-ul'>
							<li className='learning-now-li'>
								<img src='../images/mongodb.png' title='Mongo DB' alt='Mongo DB' />
							</li>
							<li className='learning-now-li'>
								<img src='../images/express.png' title='Express.js' alt='Express.js' />
							</li>
							<li className='learning-now-li'>
								<img src='../images/mocha.png' title='Mocha' alt='Mocha' />
							</li>
							<li className='learning-now-li'>
								<img src='../images/angular.png' title='Angular 2' alt='Angular 2' />
							</li>
							<li className='learning-now-li'>
								<img src='../images/node.png' title='Node.js' alt='Node.js' />
							</li>
							<li className='learning-now-li'>
								<img src='../images/chai.png' title='Chai' alt='Chai' />
							</li>
						</ul>
					</div>
					<div className='learning-future'>
						On Deck...
						<ul className='learning-future-ul'>
							<li className='learning-future-li'>
								<img src='../images/backbone.png' title='EcmaScript 6' alt='EcmaScript 6' />
							</li>
							<li className='learning-future-li'>
								<img src='../images/flux.png' title='Asynchronous JavaScript & XML' alt='Asynchronous JavaScript & XML' />
							</li>
							<li className='learning-future-li'>
								<img src='../images/phantom.png' title='PhantomJS' alt='PhantomJS' />
							</li>
							<li className='learning-future-li'>
								<img src='../images/highcharts.png' title='Highcharts' alt='Highcharts' />
							</li>
							<li className='learning-future-li'>
								<img src='../images/d3.png' title='JavaScript Object Notation' alt='JavaScript Object Notation' />
							</li>
							<li className='learning-future-li'>
								<img src='../images/swift.png' title='Swift' alt='Swift' />
							</li>
							<li className='learning-future-li'>
								<img src='../images/jasmine.png' title='Jasmine' alt='Jasmine' />
							</li>
							<li className='learning-future-li'>
								<img src='../images/karma.png' title='Karma' alt='Karma' />
							</li>
							<li className='learning-future-li'>
								<img src='../images/protractor.png' title='Protractor' alt='Protractor' />
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}
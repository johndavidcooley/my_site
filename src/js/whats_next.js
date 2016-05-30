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
								<img src='../images/mongodb.png' height='200' title='Mongo DB' alt='Mongo DB' />
							</li>
							<li className='learning-now-li'>
								<img src='../images/express.png' width='200' title='Express.js' alt='Express.js' />
							</li>
							<li className='learning-now-li'>
								<img src='../images/mocha.png' height='200' title='Mocha' alt='Mocha' />
							</li>
							<li className='learning-now-li'>
								<img src='../images/angular.png' height='200' title='Angular 2' alt='Angular 2' />
							</li>
							<li className='learning-now-li'>
								<img src='../images/node.png' width='200' title='Node.js' alt='Node.js' />
							</li>
							<li className='learning-now-li'>
								<img src='../images/chai.png' height='200' title='Chai' alt='Chai' />
							</li>
						</ul>
					</div>
					<div className='learning-future'>
						On Deck...
						<ul className='learning-future-ul'>
							<li className='learning-future-li'>
								<img src='../images/backbone.png' width='200' title='EcmaScript 6' alt='EcmaScript 6' />
							</li>
							<li className='learning-future-li'>
								<img src='../images/flux.png' width='200' title='Asynchronous JavaScript & XML' alt='Asynchronous JavaScript & XML' />
							</li>
							<li className='learning-future-li'>
								<img src='../images/phantom.png' width='200' title='PhantomJS' alt='PhantomJS' />
							</li>
							<li className='learning-future-li'>
								<img src='../images/highcharts.png' width='200' title='Highcharts' alt='Highcharts' />
							</li>
							<li className='learning-future-li'>
								<img src='../images/d3.png' width='200' title='JavaScript Object Notation' alt='JavaScript Object Notation' />
							</li>
							<li className='learning-future-li'>
								<img src='../images/swift.png' width='200' title='Swift' alt='Swift' />
							</li>
							<li className='learning-future-li'>
								<img src='../images/jasmine.png' width='200' title='Jasmine' alt='Jasmine' />
							</li>
							<li className='learning-future-li'>
								<img src='../images/karma.png' width='200' title='Karma' alt='Karma' />
							</li>
							<li className='learning-future-li'>
								<img src='../images/protractor.png' width='200' title='Protractor' alt='Protractor' />
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}
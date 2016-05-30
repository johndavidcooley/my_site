import React, { Component } from 'react';

export default class Resume extends Component {

	render() {
		return (
			<div className='resume'>
				<div className='education'>
					<div className='edu-tiy'>
						<img src='../images/tiy.png' width='400' title='The Iron Yard' alt='The Iron Yard' />
						Atlanta, GA May 2016
						Front End Engineering With MVC Frameworks
					</div>
					<div className='edu-uf'>
						<img src='../images/uf.png' width='400' title='University of Florida' alt='University of Florida' />
						Gainesville, FL May 2011
						Bachelor of Science, Advertising
						Minor, Business Administration
					</div>
				</div>
				<div className='experience'>
					<div className='exp-socius'>
						<img src='../images/socius.png' title='Socius Marketing, Inc.' alt='Socius Marketing, Inc.' />
						Tampa, FL May 2011 - January 2016
						SEO Writer
						Wrote SEO-specific content for the web to help increase organic rankings for clients in search engine results pages (SERPs). Conducted heavy research on keyword trends, keyword competition, and search traffic to develop marketing plans designed to maximize clients’ web presence. Edited the writing of peers for cohesion, flow, and grammar to consistently deliver a polished product. Posted client web content in WordPress, Adobe Dreamweaver, Drupal, Joomla!, and other content management systems. Used SEO-specific software from BrightLocal and Moz to test effectiveness and results. Frequently modified HTML and CSS files to satisfy client demands for website design.
					</div>
					<div className='exp-alligator'>
						<img src='../images/alligator.png' title='The Independent Florida Alligator' alt='The Independent Florida Alligator' />
						Gainesville, FL January 2011 - May 2011
						Advertising Sales Representative
						Sold newspaper and online advertising space to local businesses in Gainesville, FL. Developed professional relationships with clients to establish rapport and earn trust. Frequently attended in-person meetings with clients to discuss advertising strategies, ad placement, timing, and pricing. Created ad design mockups that captured the client’s vision. Ensured that payments were received before ads were scheduled to run.
					</div>
				</div>
				<div className='skills'>
					<div className='front-end-development'>
						Basic Front-End Development
						<ul className='dev-ul'>
							<li className='dev-li'>
								<img src='../images/git.png' width='200' title='Git' alt='Git' />
							</li>
							<li className='dev-li'>
								<img src='../images/github.png' height='200' title='GitHub' alt='GitHub' />
							</li>
							<li className='dev-li'>
								<img src='../images/gulp.png' height='200' title='Gulp' alt='Gulp' />
							</li>
							<li className='dev-li'>
								<img src='../images/npm.png' width='200' title='Node Package Manager' alt='Node Package Manager' />
							</li>
							<li className='dev-li'>
								<img src='../images/html5.png' height='200' title='HTML5' alt='HTML5' />
							</li>
							<li className='dev-li'>
								<img src='../images/sublime.png' width='200' title='Sublime Text' alt='Sublime Text' />
							</li>
							<li className='dev-li'>
								<img src='../images/atom.png' width='200' title='Atom' alt='Atom' />
							</li>
							<li className='dev-li'>
								<img src='../images/iterm.png' width='200' title='iTerm' alt='iTerm' />
							</li>
						</ul>
					</div>
					<div className='front-end-design'>
						Front-End Design
						<ul className='des-ul'>
							<li className='des-li'>
								<img src='../images/css3.png' height='200' title='CSS3' alt='CSS3' />
							</li>
							<li className='des-li'>
								<img src='../images/sass.png' width='200' title='Syntactically Awesome Stylesheets' alt='Syntactically Awesome Stylesheets' />
							</li>
							<li className='des-li'>
								<img src='../images/bootstrap.png' width='200' title='Bootstrap' alt='Bootstrap' />
							</li>
							<li className='des-li'>
								<img src='../images/material_ui.png' width='200' title='Material UI' alt='Material UI' />
							</li>
							<li className='des-li'>
								<img src='../images/font_awesome.png' width='200' title='Font Awesome' alt='Font Awesome' />
							</li>
						</ul>
					</div>
					<div className='javascript'>
						JavaScript
						<ul className='js-ul'>
							<li className='js-li'>
								<img src='../images/es6.png' width='200' title='EcmaScript 6' alt='EcmaScript 6' />
							</li>
							<li className='js-li'>
								<img src='../images/babel.png' width='200' title='Babel' alt='Babel' />
							</li>
							<li className='js-li'>
								<img src='../images/ajax.png' width='200' title='Asynchronous JavaScript & XML' alt='Asynchronous JavaScript & XML' />
							</li>
							<li className='js-li'>
								<img src='../images/json.png' width='200' title='JavaScript Object Notation' alt='JavaScript Object Notation' />
							</li>
							<li className='js-li'>
								<img src='../images/react.png' height='200' title='React JS' alt='React JS' />
							</li>
						</ul>
					</div>
					<div className='javascript-libraries'>
						JavaScript Libraries
						<ul className='jsl-ul'>
							<li className='jsl-li'>
								<img src='../images/jquery.png' width='200' title='jQuery' alt='jQuery' />
							</li>
							<li className='jsl-li'>
								<img src='../images/lodash.png' width='200' title='Lodash' alt='Lodash' />
							</li>
							<li className='jsl-li'>
								<img src='../images/momentjs.png' width='200' title='Moment.js' alt='Moment.js' />
							</li>
							<li className='jsl-li'>
								<img src='../images/chartjs.png' width='200' title='Chart.js' alt='Chart.js' />
							</li>
						</ul>
					</div>
					<div className='other-skills'>
						Other Skills
						<ul className='other-ul'>
							<li className='other-li'>
								<img src='../images/photoshop.jpg' width='200' title='Adobe Photoshop' alt='Adobe Photoshop' />
							</li>
							<li className='other-li'>
								<img src='../images/ms_office.png' width='200' title='Microsoft Office Suite' alt='Microsoft Office Suite' />
							</li>
							<li className='other-li'>
								<img src='../images/google_analytics.png' height='200' title='Google Analytics' alt='Google Analytics' />
							</li>
							<li className='other-li'>
								<img src='../images/bright_local.png' width='200' title='BrightLocal' alt='BrightLocal' />
							</li>
							<li className='other-li'>
								<img src='../images/dreamweaver.png' width='200' title='Adobe Dreamweaver' alt='Adobe Dreamweaver' />
							</li>
							<li className='other-li'>
								<img src='../images/wordpress.png' width='200' title='WordPress' alt='WordPress' />
							</li>
							<li className='other-li'>
								<img src='../images/drupal.png' height='200' title='Drupal' alt='Drupal' />
							</li>
							<li className='other-li'>
								<img src='../images/joomla.png' width='200' title='Joomla!' alt='Joomla!' />
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}
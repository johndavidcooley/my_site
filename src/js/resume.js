import React, { Component } from 'react';

export default class Resume extends Component {

	render() {
		return (
			<div className='resume'>
				<div className='education'>
					<div className='edu-tiy'>
						<img src='../images/r_education/tiy.png' title='The Iron Yard' alt='The Iron Yard' />
					</div>
					<div className='edu-uf'>
						<img src='../images/r_education/uf.png' title='University of Florida' alt='University of Florida' />
					</div>
				</div>
				<div className='experience'>
					<div className='exp-socius'>
						<img src='../images/r_experience/socius.png' title='Socius Marketing, Inc.' alt='Socius Marketing, Inc.' />
					</div>
					<div className='exp-alligator'>
						<img src='../images/r_experience/alligator.png' title='The Independent Florida Alligator' alt='The Independent Florida Alligator' />
					</div>
				</div>
				<div className='skills'>
					<div className='front-end-development'>
						<ul className='dev-ul'>
							<li className='dev-li'>
								<img src='../images/r_skills/development/git.png' title='Git' alt='Git' />
							</li>
							<li className='dev-li'>
								<img src='../images/r_skills/development/github.png' title='GitHub' alt='GitHub' />
							</li>
							<li className='dev-li'>
								<img src='../images/r_skills/development/gulp.png' title='Gulp' alt='Gulp' />
							</li>
							<li className='dev-li'>
								<img src='../images/r_skills/development/npm.png' title='Node Package Manager' alt='Node Package Manager' />
							</li>
							<li className='dev-li'>
								<img src='../images/r_skills/development/html5.png' title='HTML5' alt='HTML5' />
							</li>
							<li className='dev-li'>
								<img src='../images/r_skills/development/sublime.png' title='Sublime Text' alt='Sublime Text' />
							</li>
							<li className='dev-li'>
								<img src='../images/r_skills/development/atom.png' title='Atom' alt='Atom' />
							</li>
							<li className='dev-li'>
								<img src='../images/r_skills/development/iterm.png' title='iTerm' alt='iTerm' />
							</li>
						</ul>
					</div>
					<div className='front-end-design'>
						<ul className='des-ul'>
							<li className='des-li'>
								<img src='../images/r_skills/design/css3.png' title='CSS3' alt='CSS3' />
							</li>
							<li className='des-li'>
								<img src='../images/r_skills/design/sass.png' title='Syntactically Awesome Stylesheets' alt='Syntactically Awesome Stylesheets' />
							</li>
							<li className='des-li'>
								<img src='../images/r_skills/design/bootstrap.png' title='Bootstrap' alt='Bootstrap' />
							</li>
							<li className='des-li'>
								<img src='../images/r_skills/design/material_ui.png' title='Material UI' alt='Material UI' />
							</li>
						</ul>
					</div>
					<div className='javascript'>
						<ul className='js-ul'>
							<li className='js-li'>
								<img src='../images/r_skills/javascript/es6.png' title='EcmaScript 6' alt='EcmaScript 6' />
							</li>
							<li className='js-li'>
								<img src='../images/r_skills/javascript/ajax.png' title='Asynchronous JavaScript & XML' alt='Asynchronous JavaScript & XML' />
							</li>
							<li className='js-li'>
								<img src='../images/r_skills/javascript/json.png' title='JavaScript Object Notation' alt='JavaScript Object Notation' />
							</li>
							<li className='js-li'>
								<img src='../images/r_skills/javascript/react.png' title='React JS' alt='React JS' />
							</li>
						</ul>
					</div>
					<div className='javascript-libraries'>
						<ul className='jsl-ul'>
							<li className='jsl-li'>
								<img src='../images/r_skills/libraries/jquery.png' title='jQuery' alt='jQuery' />
							</li>
							<li className='jsl-li'>
								<img src='../images/r_skills/libraries/lodash.png' title='Lodash' alt='Lodash' />
							</li>
							<li className='jsl-li'>
								<img src='../images/r_skills/libraries/momentjs.png' title='Moment.js' alt='Moment.js' />
							</li>
							<li className='jsl-li'>
								<img src='../images/r_skills/libraries/chartjs.png' title='Chart.js' alt='Chart.js' />
							</li>
						</ul>
					</div>
					<div className='other-skills'>
						<ul className='other-ul'>
							<li className='other-li'>
								<img src='../images/r_skills/misc/photoshop.png' title='Adobe Photoshop' alt='Adobe Photoshop' />
							</li>
							<li className='other-li'>
								<img src='../images/r_skills/misc/ms_office.png' title='Microsoft Office Suite' alt='Microsoft Office Suite' />
							</li>
							<li className='other-li'>
								<img src='../images/r_skills/misc/google_analytics.png' title='Google Analytics' alt='Google Analytics' />
							</li>
							<li className='other-li'>
								<img src='../images/r_skills/misc/bright_local.png' title='BrightLocal' alt='BrightLocal' />
							</li>
							<li className='other-li'>
								<img src='../images/r_skills/misc/dreamweaver.png' title='Adobe Dreamweaver' alt='Adobe Dreamweaver' />
							</li>
							<li className='other-li'>
								<img src='../images/r_skills/misc/wordpress.png' title='WordPress' alt='WordPress' />
							</li>
							<li className='other-li'>
								<img src='../images/r_skills/misc/drupal.png' title='Drupal' alt='Drupal' />
							</li>
							<li className='other-li'>
								<img src='../images/r_skills/misc/joomla.png' title='Joomla!' alt='Joomla!' />
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}
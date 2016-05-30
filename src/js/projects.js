import React, { Component } from 'react';

export default class Projects extends Component {

	render() {
		return (
			<div className='projects'>
				<div className='project hockey-doctor'>
					Hockey Doctor
					An application providing fantasy hockey statistics and information tailored for users' specific fantasy leagues. The back end was built by a friend using Ruby on Rails and the Yahoo! Fantasy Sports API.
					GitHub
					Deployed Site
				</div>
				<div className='project vote-atl'>
					Vote ATL
					A voting application designed to allow Atlanta residents to vote in mayoral elections from a computer, tablet, or phone - eliminating a trip to a polling location.
					GitHub
					Deployed Site
				</div>
				<div className='project contact-list'>
					React Contact List
					A contact list built using ReactJS, designed to resemble an iPhone with similar functionality.
					GitHub
					Deployed Site
				</div>
				<div className='project final-four'>
					Final Four Simulator
					This simple app is designed to simulate the 2016 NCAA Men's Basketball Final Four.
					GitHub
					Deployed Site
				</div>
				<div className='project ye-olde'>
					Ye Olde
					A simple website for a fictitious restaurant. The site includes API calls and a heavy reliance on jQuery.
					GitHub
					Deployed Site
				</div>
				<div className='project etsy-whiskey'>
					Etsy Whiskey
					A simple site I created to recreate an Etsy page to near pixel perfection. The items displayed are placed to the DOM dynamially, using the Etsy API.
					GitHub
					Deployed Site
				</div>
				<div className='project dynamic-time'>
					Dynamic Time
					A simple site I made with only a week of JavaScript experience. One clock shows the current time; the other shows the time as a hexidecimal value, which is updated each second and displayed as the background.
					GitHub
					Deployed Site
				</div>
				<div className='project js-calculator'>
					JavaScript Calculator
					This site is a fully functioning calculator I created on my second day of learning JavaScript.
					GitHub
					Deployed Site
				</div>
			</div>
		)
	}
}
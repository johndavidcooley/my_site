import React, { Component } from 'react';

export default class Projects extends Component {

	render() {
		return (
			<div className='projects'>
				<div className='project hockey-doctor'>
					<div className='name'>
						Hockey Doctor
					</div>
					<div className='description'>
						An application providing fantasy hockey statistics and information tailored for users' specific fantasy leagues. The back end was built by a friend using Ruby on Rails and the Yahoo! Fantasy Sports API.
					</div>
					<div className='github-deployed'>
						<div className='github'>
							<a href='https://github.com/fantasy-draft-assist' target='_blank'>
								GitHub
							</a>
						</div>
						<div className='deployed'>
							<a href='https://hockeydoctor.surge.sh/' target='_blank'>
								Deployed Site
							</a>
						</div>
					</div>
				</div>
				<div className='project vote-atl'>
					<div className='name'>
						Vote ATL
					</div>
					<div className='description'>
						A voting application designed to allow Atlanta residents to vote in mayoral elections from a computer, tablet, or phone - eliminating a trip to a polling location.
					</div>
					<div className='github-deployed'>
						<div className='github'>
							<a href='https://github.com/PB-and-jQuery' target='_blank'>
								GitHub
							</a>
						</div>
						<div className='deployed'>
							<a href='https://vote-atlanta.surge.sh' target='_blank'>
								Deployed Site
							</a>
						</div>
					</div>
				</div>
				<div className='project contact-list'>
					<div className='name'>
						React Contact List
					</div>
					<div className='description'>
						A contact list built using ReactJS, designed to resemble an iPhone with similar functionality. The people in the contact list are real, but I don't actually know any of them.
					</div>
					<div className='github-deployed'>
						<div className='github'>
							<a href='https://github.com/johndavidcooley/routed_react_contacts' target='_blank'>
								GitHub
							</a>
						</div>
						<div className='deployed'>
							<a href='https://reactcontactlist.surge.sh' target='_blank'>
								Deployed Site
							</a>
						</div>
					</div>
				</div>
				<div className='project final-four'>
					<div className='name'>
						Final Four Simulator
					</div>
					<div className='description'>
						This simple app is designed to simulate the 2016 NCAA Men's Basketball Final Four. The winners of each game are randomized, with the favored teams having slightly better odds of winning.
					</div>
					<div className='github-deployed'>
						<div className='github'>
							<a href='https://github.com/johndavidcooley/final_four' target='_blank'>
								GitHub
							</a>
						</div>
						<div className='deployed'>
							<a href='http://finalfour.surge.sh/' target='_blank'>
								Deployed Site
							</a>
						</div>
					</div>
				</div>
				<div className='project ye-olde'>
					<div className='name'>
						Ye Olde
					</div>
					<div className='description'>
						A simple website for a fictitious restaurant. The site includes API calls and a heavy reliance on jQuery. The Google Maps API integration hasn't been playing nicely lately; please be mindful.
					</div>
					<div className='github-deployed'>
						<div className='github'>
							<a href='https://github.com/jdiboll/restaurant' target='_blank'>
								GitHub
							</a>
						</div>
						<div className='deployed'>
							<a href='https://yeolde.surge.sh/' target='_blank'>
								Deployed Site
							</a>
						</div>
					</div>
				</div>
				<div className='project etsy-whiskey'>
					<div className='name'>
						Etsy Whiskey
					</div>
					<div className='description'>
						A simple site I created to recreate an Etsy page nearly to pixel perfection. The items shown for sale are placed on the DOM dynamially, using the Etsy API.
					</div>
					<div className='github-deployed'>
						<div className='github'>
							<a href='https://github.com/johndavidcooley/etsy_whiskey' target='_blank'>
								GitHub
							</a>
						</div>
						<div className='deployed'>
							<a href='https://etsy-whiskey.surge.sh' target='_blank'>
								Deployed Site
							</a>
						</div>
					</div>
				</div>
				<div className='project dynamic-time'>
					<div className='name'>
						Dynamic Time
					</div>
					<div className='description'>
						A simple site I made with only a week of JavaScript experience. One clock shows the current time; the other shows the time as a hexidecimal value, which is displayed as the background color.
					</div>
					<div className='github-deployed'>
						<div className='github'>
							<a href='https://github.com/johndavidcooley/dynamic_time' target='_blank'>
								GitHub
							</a>
						</div>
						<div className='deployed'>
							<a href='https://dynamic_time.surge.sh/' target='_blank'>
								Deployed Site
							</a>
						</div>
					</div>
				</div>
				<div className='project js-calculator'>
					<div className='name'>
						JavaScript Calculator
					</div>
					<div className='description'>
						This site is a fully functioning calculator I created on my second day of learning JavaScript. Numbers and operators are stored in a display field and evaluated when clicking on the Equals button.
					</div>
					<div className='github-deployed'>
						<div className='github'>
							<a href='https://github.com/johndavidcooley/js_calculator' target='_blank'>
								GitHub
							</a>
						</div>
						<div className='deployed'>
							<a href='https://jscalculator.surge.sh/' target='_blank'>
								Deployed Site
							</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
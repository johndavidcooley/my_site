import React, { Component } from 'react';

export default class Home extends Component {

	render() {
		return (
			<div className='home'>
				<div className='home-container'>
					<div className='left-side'>
						My name is John David Cooley, and I am a young software developer looking to find my niche in the programming world.
						I love writing JavaScript and using it to create stunning web applications.
						I enjoy diving into new frameworks and libraries to enhance my JS knowledge and skillset.
						My mind is curious, and I want to learn as much as I can to continue to grow as a developer.
						Feel free to check out my r&eacute;sum&eacute;, the projects I have completed, what I plan to learn next, and a little bit more about me.
						And if you feel so inclined to contact me, please see links to my LinkedIn, GitHub, and Gmail below.

					</div>
					<div className='right-side'>
						<img src='../images/jdc.jpg' title='John David Cooley' alt='John David Cooley' width='500'/>
					</div>
				</div>
			</div>
		)
	}
}
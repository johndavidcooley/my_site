import React, { Component } from 'react';
import { Link } from 'react-router';

export default class TopNav extends Component {

	render() {
		return (
			<div className='top-nav'>
				<ul>
					<Link to='/resume'>
						<li>
							R&eacute;sum&eacute;
						</li>
					</Link>
					<Link to='/projects'>
						<li>
							Projects
						</li>
					</Link>
					<Link to='/whats_next'>
						<li>
							What's Next?
						</li>
					</Link>
					<Link to='/about_me'>
						<li>
							About Me
						</li>
					</Link>
				</ul>
			</div>
		)
	}
}
import React, { Component } from 'react';

import Icon from '../misc/icon';

export default class BottomNav extends Component {

	render() {
		return (
			<div className='bottom-nav'>

				<div className='contact-info'>
					Contact Information
				</div>

				<div className='contact-icons'>

					<ul className='icons-ul'>
						<a href='https://www.linkedin.com/in/john-cooley-93b5a773?trk=hp-identity-photo' target='_blank'>
							<li className='icons-li'>
								<Icon type='linkedin' />
							</li>
						</a>
						<a href='https://github.com/johndavidcooley' target='_blank'>
							<li className='icons-li'>
								<Icon type='github' />
							</li>
						</a>
						<a href='mailto:johndavidcooley@gmail.com' target='_top'>
							<li className='icons-li right-icon'>
								<Icon type='envelope' />
							</li>
						</a>
					</ul>

				</div>

			</div>
		)
	}
}
import React, { Component } from 'react';

import TopNav from './top-nav';
import BottomNav from './bottom-nav';





export default class WithNavs extends Component {


	render() {
		return (
			<div className='with-navs'>
				<TopNav />
				{this.props.children}
				<BottomNav />
			</div>
		)
	}
}
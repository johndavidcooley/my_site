// Javascript Entry Point
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router';


import WithNavs from './navs/with_navs';
import Home from './home';
import Resume from './resume';
import Projects from './projects';
import WhatsNext from './whats_next';
import AboutMe from './about_me';





render((
	<Router history={hashHistory}>
		<Route path='/' component={WithNavs}>
			<IndexRoute component={Home} />
			<Route path='/resume' component={Resume} />
			<Route path='/projects' component={Projects} />
			<Route path='/whats_next' component={WhatsNext} />
			<Route path='/about_me' component={AboutMe} />
		</Route>
	</Router>
	), document.querySelector('.app')
)

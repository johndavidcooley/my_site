// Javascript Entry Point
import React, { Component } from 'react';
import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router';

//import NAME from './file_name';

<Router history={hashHistory} >
	<Route path='/' component={WithNavs}>
		<IndexRoute component={Main} />
		<Route path='/resume' component={Resume} />
		<Route path='/projects' component={Projects} />
		<Route path='/whats_next' component={WhatsNext} />
		<Route path='/about_me' component={AboutMe} />
	</Route>
</Router>
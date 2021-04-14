import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import List from './List';
import Detail from './Detail';

const Root = () => (
	<BrowserRouter>
		<Switch>
			<div>
			<Route exact path="/" component={List}/>
			<Route exact path="/:id" component={Detail}/>
			</div>
		</Switch>
	</BrowserRouter>
);

export default Root;
import React from 'react'
// 'react-router-dom'
// HashRouter
// BrowserRouter
import {
	HashRouter as Router,
	Route,
	Link
} from 'react-router-dom'
import Content from '../components/Content.js'
import Detail from '../components/Detail.js'

class MyRouter extends React.Component {

	render() {

		return (
			<Router>
				<div>
					<Route exact path="/" component={Content}/>
					<Route path="/detail" component={Detail}/>
				</div>
			</Router>
		)
	}

}

export {MyRouter as default};
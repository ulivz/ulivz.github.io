'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.styl';
import Sidebar from './components/Sidebar.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Content from './components/Content.js';



import MyRouter from './routes/routes.js';

ReactDOM.render(
	<div>
		<Sidebar></Sidebar>
		<Header></Header>
		<MyRouter></MyRouter>
		<Footer></Footer>
	</div>,
	document.getElementById('app')
)

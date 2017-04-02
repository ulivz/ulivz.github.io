import React from 'react';
import ColorBlock from './ColorBlock.js';
class Header extends React.Component {

	render() {
		return (
			<header id="v2js-header">
				<div className="v2js-title">
					<a href="http://www.v2js.com/blog/#/">
						<button className="v2js-btn-full">
							BLOG
						</button>
					</a>
					<a href="https://github.com/toxichl">
						<button className="v2js-btn-empty">
							Github
						</button>
					</a>
					<a href="#" className="js-v2js-nav-toggle v2js-nav-toggle"><i></i></a>
				</div>
			</header>
		);
	}
}

export {Header as default};
import React from 'react';

class Header extends React.Component {

	render() {
		return (
			<header id="v2js-header">
				<div className="v2js-title">
					<div className="v2js-color-1"></div>
					<div className="v2js-color-2"></div>
					<div className="v2js-color-3"></div>
				</div>
				<div className="container-fluid">
					<div className="row">
						<a href="#" className="js-v2js-nav-toggle v2js-nav-toggle"><i></i></a>
						<ul className="v2js-social">
							<li><a href="https://github.com/toxichl"><i className="icon-github"></i></a></li>
							<li><a href="http://weibo.com/1631967413/profile"><i className="icon-sina-weibo"></i></a></li>
						</ul>
						<div className="col-lg-12 col-md-12 text-center">
							<h1 id="v2js-logo">
								{/*<a href="index.html">*/}
									{/*V2JS <sup>~</sup></a>*/}
								<img width="100" src="static/images/logo.svg" alt=""/>
							</h1>
						</div>

					</div>

				</div>

			</header>
		);
	}
}

export {Header as default};
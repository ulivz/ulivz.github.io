import React from 'react';

class Header extends React.Component {

	render() {
		return (
			<header id="fh5co-header">

				<div className="container-fluid">

					<div className="row">
						<a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle"><i></i></a>
						<ul className="fh5co-social">
							<li><a href="#"><i className="icon-twitter"></i></a></li>
							<li><a href="#"><i className="icon-facebook"></i></a></li>
							<li><a href="#"><i className="icon-instagram"></i></a></li>
						</ul>
						<div className="col-lg-12 col-md-12 text-center">
							<h1 id="fh5co-logo"><a href="index.html">Magazine <sup>TM</sup></a></h1>
						</div>

					</div>

				</div>

			</header>
		);
	}

}

export {Header as default};
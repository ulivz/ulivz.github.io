import React from 'react';

class Sidebar extends React.Component {

	render() {
		return (
			<div id="fh5co-offcanvas">
				<a href="#" className="fh5co-close-offcanvas js-fh5co-close-offcanvas"><span>
				<i className="icon-cross3"></i> <span>Close</span></span></a>
				<div className="fh5co-bio">
					<figure>
						<img src="static/images/person1.jpg" alt="Free HTML5 Bootstrap Template" className="img-responsive" />
					</figure>
					<h3 className="heading">About Me</h3>
					<h2>Emily Tran Le</h2>
					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind
						texts. </p>
					<ul className="fh5co-social">
						<li><a href="#"><i className="icon-twitter"></i></a></li>
						<li><a href="#"><i className="icon-facebook"></i></a></li>
						<li><a href="#"><i className="icon-instagram"></i></a></li>
					</ul>
				</div>

				<div className="fh5co-menu">
					<div className="fh5co-box">
						<h3 className="heading">Categories</h3>
						<ul>
							<li><a href="#">Travel</a></li>
							<li><a href="#">Style</a></li>
							<li><a href="#">Photography</a></li>
							<li><a href="#">Food &amp; Drinks</a></li>
							<li><a href="#">Culture</a></li>
						</ul>
					</div>
					<div className="fh5co-box">
						<h3 className="heading">Search</h3>
						<form action="#">
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Type a keyword" />
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}

}

export {Sidebar as default};
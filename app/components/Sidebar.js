import React from 'react';

class Sidebar extends React.Component {

	render() {
		return (
			<div id="v2js-offcanvas">
				<a href="#" className="v2js-close-offcanvas js-v2js-close-offcanvas"><span>
				<i className="icon-cross3"></i> <span>Close</span></span></a>
				<div className="v2js-bio">
					<figure>
						<img src="https://avatars0.githubusercontent.com/u/23133919?v=3&u=dc5a09ee6220ece04f379319f13686669a2b3c4f&s=400" alt="Free HTML5 Bootstrap Template" className="img-responsive" />
					</figure>
					<h3 className="heading">About Me</h3>
					<h2>Toxichl</h2>
					<p>A Coder & Designer</p>
					<ul className="v2js-social">
						<li><a href="https://github.com/toxichl"><i className="icon-github"></i></a></li>
						<li><a href="http://weibo.com/1631967413/profile"><i className="icon-sina-weibo"></i></a></li>
						{/*<li><a href="#"><i className="icon-twitter"></i></a></li>
						<li><a href="#"><i className="icon-github"></i></a></li>
						<li><a href="#"><i className="icon-google"></i></a></li>
						<li><a href="#"><i className="icon-"></i></a></li>
						<li><a href="#"><i className="icon-facebook"></i></a></li>
						<li><a href="#"><i className="icon-instagram"></i></a></li>*/}
					</ul>
				</div>

				<div className="v2js-menu">
					<div className="v2js-box">
						<h3 className="heading">Categories</h3>
						<ul>
							<li><a href="http://www.v2js.com/blog/#/">Blog</a></li>
							<li><a href="#">Writing</a></li>
							<li><a href="#">Design</a></li>
							<li><a href="#">Videos</a></li>
							<li><a href="#">Music</a></li>
						</ul>
					</div>
					<div className="v2js-box">
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
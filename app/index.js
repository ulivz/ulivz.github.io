'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './style/color.less';
import CommentBox from './comment/CommentBox';
import MyRouter from './routes/routes.js';

// CommentBox
// CommentList
// CommentList
// CommentForm

ReactDOM.render(
	<div>
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
		<!-- END #fh5co-offcanvas -->
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

		<!-- END #fh5co-header -->
		<div className="container-fluid">
			<div className="row fh5co-post-entry">
				<article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
					<figure>
						<a href="single.html"><img src="static/images/pic_1.jpg" alt="Image" className="img-responsive" /></a>
					</figure>
					<span className="fh5co-meta"><a href="single.html">Food &amp; Drink</a></span>
					<h2 className="fh5co-article-title"><a href="single.html">We Eat and Drink All Night</a></h2>
					<span className="fh5co-meta fh5co-date">March 6th, 2016</span>
				</article>
				<article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
					<figure>
						<a href="single.html"><img src="static/images/pic_2.jpg" alt="Image" className="img-responsive" /></a>
					</figure>
					<span className="fh5co-meta"><a href="single.html">Food &amp; Drink</a></span>
					<h2 className="fh5co-article-title"><a href="single.html">Beef Steak at Guatian Restaurant</a></h2>
					<span className="fh5co-meta fh5co-date">March 6th, 2016</span>
				</article>
				<div className="clearfix visible-xs-block"></div>
				<article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
					<figure>
						<a href="single.html"><img src="static/images/pic_3.jpg" alt="Image" className="img-responsive" /></a>
					</figure>
					<span className="fh5co-meta"><a href="single.html">Travel</a>, <a href="single.html">Style</a></span>
					<h2 className="fh5co-article-title"><a href="single.html">An Overlooking River at the East Cost</a></h2>
					<span className="fh5co-meta fh5co-date">March 6th, 2016</span>
				</article>
				<article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
					<figure>
						<a href="single.html"><img src="static/images/pic_4.jpg" alt="Image" className="img-responsive" /></a>
					</figure>
					<span className="fh5co-meta"><a href="single.html">Travel</a>, <a href="single.html">Style</a></span>
					<h2 className="fh5co-article-title"><a href="single.html">A Wildlife In The Mountain of India</a></h2>
					<span className="fh5co-meta fh5co-date">March 6th, 2016</span>
				</article>
				<div className="clearfix visible-lg-block visible-md-block visible-sm-block visible-xs-block"></div>
				<article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
					<figure>
						<a href="single.html"><img src="static/images/pic_5.jpg" alt="Image" className="img-responsive" /></a>
					</figure>
					<span className="fh5co-meta"><a href="single.html">Photography</a></span>
					<h2 className="fh5co-article-title"><a href="single.html">We Took A Photo</a></h2>
					<span className="fh5co-meta fh5co-date">March 6th, 2016</span>
				</article>
				<article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
					<figure>
						<a href="single.html"><img src="static/images/pic_6.jpg" alt="Image" className="img-responsive" /></a>
					</figure>
					<span className="fh5co-meta"><a href="single.html">Travel</a>, <a href="single.html">Style</a></span>
					<h2 className="fh5co-article-title"><a href="single.html">A Modernize Huge and Beautiful Building</a></h2>
					<span className="fh5co-meta fh5co-date">March 6th, 2016</span>
				</article>
				<div className="clearfix visible-xs-block"></div>
				<article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
					<figure>
						<a href="single.html"><img src="static/images/pic_7.jpg" alt="Image" className="img-responsive"/></a>
					</figure>
					<span className="fh5co-meta"><a href="single.html">Food &amp; Drinks</a></span>
					<h2 className="fh5co-article-title"><a href="single.html">Enjoying the Native Juice Drink in Brazil</a></h2>
					<span className="fh5co-meta fh5co-date">March 6th, 2016</span>
				</article>
				<article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
					<figure>
						<a href="single.html"><img src="static/images/pic_8.jpg" alt="Image" className="img-responsive"/></a>
					</figure>
					<span className="fh5co-meta"><a href="single.html">Travel</a>, <a href="single.html">Style</a></span>
					<h2 className="fh5co-article-title"><a href="single.html">Boat Travel in The Vietnam River</a></h2>
					<span className="fh5co-meta fh5co-date">March 6th, 2016</span>
				</article>
				<div className="clearfix visible-lg-block visible-md-block visible-sm-block visible-xs-block"></div>


				<article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
					<figure>
						<a href="single.html"><img src="static/images/pic_1.jpg" alt="Image" className="img-responsive"/></a>
					</figure>
					<span className="fh5co-meta"><a href="single.html">Food &amp; Drink</a></span>
					<h2 className="fh5co-article-title"><a href="single.html">We Eat and Drink All Night</a></h2>
					<span className="fh5co-meta fh5co-date">March 6th, 2016</span>
				</article>
				<article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
					<figure>
						<a href="single.html"><img src="static/images/pic_2.jpg" alt="Image" className="img-responsive"/></a>
					</figure>
					<span className="fh5co-meta"><a href="single.html">Food &amp; Drink</a></span>
					<h2 className="fh5co-article-title"><a href="single.html">Beef Steak at Guatian Restaurant</a></h2>
					<span className="fh5co-meta fh5co-date">March 6th, 2016</span>
				</article>
				<div className="clearfix visible-xs-block"></div>
				<article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
					<figure>
						<a href="single.html"><img src="static/images/pic_3.jpg" alt="Image" className="img-responsive"/></a>
					</figure>
					<span className="fh5co-meta"><a href="single.html">Travel</a>, <a href="single.html">Style</a></span>
					<h2 className="fh5co-article-title"><a href="single.html">An Overlooking River at the East Cost</a></h2>
					<span className="fh5co-meta fh5co-date">March 6th, 2016</span>
				</article>
				<article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
					<figure>
						<a href="single.html"><img src="static/images/pic_4.jpg" alt="Image" className="img-responsive"/></a>
					</figure>
					<span className="fh5co-meta"><a href="single.html">Travel</a>, <a href="single.html">Style</a></span>
					<h2 className="fh5co-article-title"><a href="single.html">A Wildlife In The Mountain of India</a></h2>
					<span className="fh5co-meta fh5co-date">March 6th, 2016</span>
				</article>
				<div className="clearfix visible-lg-block visible-md-block visible-sm-block visible-xs-block"></div>
				<article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
					<figure>
						<a href="single.html"><img src="static/images/pic_5.jpg" alt="Image" className="img-responsive"/></a>
					</figure>
					<span className="fh5co-meta"><a href="single.html">Photography</a></span>
					<h2 className="fh5co-article-title"><a href="single.html">We Took A Photo</a></h2>
					<span className="fh5co-meta fh5co-date">March 6th, 2016</span>
				</article>
				<article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
					<figure>
						<a href="single.html"><img src="static/images/pic_6.jpg" alt="Image" className="img-responsive"/></a>
					</figure>
					<span className="fh5co-meta"><a href="single.html">Travel</a>, <a href="single.html">Style</a></span>
					<h2 className="fh5co-article-title"><a href="single.html">A Modernize Huge and Beautiful Building</a></h2>
					<span className="fh5co-meta fh5co-date">March 6th, 2016</span>
				</article>
				<div className="clearfix visible-xs-block"></div>
				<article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
					<figure>
						<a href="single.html"><img src="static/images/pic_7.jpg" alt="Image" className="img-responsive"/></a>
					</figure>
					<span className="fh5co-meta"><a href="single.html">Food &amp; Drinks</a></span>
					<h2 className="fh5co-article-title"><a href="single.html">Enjoying the Native Juice Drink in Brazil</a></h2>
					<span className="fh5co-meta fh5co-date">March 6th, 2016</span>
				</article>
				<article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
					<figure>
						<a href="single.html"><img src="static/images/pic_8.jpg" alt="Image" className="img-responsive"/></a>
					</figure>
					<span className="fh5co-meta"><a href="single.html">Travel</a>, <a href="single.html">Style</a></span>
					<h2 className="fh5co-article-title"><a href="single.html">Boat Travel in The Vietnam River</a></h2>
					<span className="fh5co-meta fh5co-date">March 6th, 2016</span>
				</article>
				<div className="clearfix visible-xs-block"></div>
			</div>
		</div>

		<footer id="fh5co-footer">
			<p>
				<small>&copy; 2016 - 2017. Toxichl. All Rights Reserverd. <br/>
					   More Templates <a href="http://www.cssmoban.com/"
				       target="_blank" title="模板之家">模板之家</a>
					- Collect from <a href="http://www.cssmoban.com/" title="网页模板" target="_blank">网页模板</a>
				</small>
			</p>
		</footer>
	</div>,
	document.getElementById('app')
)

import React from 'react';

class Content extends React.Component {

	render() {
		return (
			<article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
				<figure>
					<a href={this.props.link}><img src={this.props.img} alt="Image" className="img-responsive" /></a>
				</figure>
				<span className="fh5co-meta"><a href="single.html">{this.props.subtitle}</a></span>
				<h2 className="fh5co-article-title"><a href="single.html">{this.props.title}</a></h2>
				<span className="fh5co-meta fh5co-date">{this.props.date}</span>
			</article>
		);
	}

}

export {Content as default};
import React from 'react'
import { Link } from 'react-router-dom'

class Content extends React.Component {

	render() {
		return (
			<article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
				<figure>
					<Link to={'/' + this.props.data.link}>
						<img src={this.props.data.img} alt="Image" className="img-responsive" />
					</Link>
				</figure>
				<span className="fh5co-meta"><a href="single.html">{this.props.data.subtitle}</a></span>
				<h2 className="fh5co-article-title"><a href="single.html">{this.props.data.title}</a></h2>
				<span className="fh5co-meta fh5co-date">{this.props.data.date}</span>
			</article>
		);
	}

}

export {Content as default};
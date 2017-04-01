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
				<span className="v2js-meta"><a href="single.html">{this.props.data.subtitle}</a></span>
				<h2 className="v2js-article-title"><a href="single.html">{this.props.data.title}</a></h2>
				<span className="v2js-meta v2js-date">{this.props.data.date}</span>
			</article>
		);
	}

}

export {Content as default};
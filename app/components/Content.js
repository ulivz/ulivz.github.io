import React from 'react';
import ArticalData from './ArticleData.js';
import ClearFix from './ClearFix.js';
import Article from './Article.js';

class Content extends React.Component {

	render() {
		return (
			<div className="container-fluid">
				<div className="row fh5co-post-entry">
					{
						ArticalData.map(artical => {

						})
					}
				</div>
			</div>
		);
	}

}

export {Content as default};
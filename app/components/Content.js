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
						ArticalData.map((artical, index) => {
							if(index % 2 !== 0) {
								return (
									<div key={index}>
										<Article data={artical} ></Article>
										<ClearFix></ClearFix>
									</div>
								)
							}
							return (
								<Article data={artical} key={index}></Article>
							)
						})
					}
				</div>
			</div>
		);
	}

}

export {Content as default};
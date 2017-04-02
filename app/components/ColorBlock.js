import React from 'react';
const SUFFIX = 'v2js-color-'

class ColorBlock extends React.Component {

	constructor(props) {
		super(props);
		console.log(this.props.count)
		this.countArr = [];
		for (var i = 1; i <= this.props.count; i++) {
			this.countArr.push(i)
		}
		this.state = {};
	}

	render() {
		return (
			<div>
				{
					this.countArr.map((count, key) => {
						return (
							<div className={SUFFIX + count} key={key}></div>
						)
					})
				}
			</div>
		)

	}

}

export { ColorBlock as default };
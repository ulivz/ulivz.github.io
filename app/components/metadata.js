const SUFFIX = "static/images/pic_"

class ArticleModel {

	constructor(opts = {
		            link : '',
		            img : '',
		            title : '',
		            subtitle : '',
		            date : ''
	            }) {

		Object.assign(this, opts)

	}

}

let metadata = new Array()

for (let i = 0; i < 16; i++) {
	metadata.push(new ArticleModel(
		{
			link: '',
			img: SUFFIX + Math.floor(i/2) + 1,
			title: 'Food &amp; Drink',
			subtitle: "We Eat and Drink All Night",
			date: "March 6th, 2016"
		}
	))
}


export default metadata;
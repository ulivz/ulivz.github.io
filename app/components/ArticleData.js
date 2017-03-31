const SUFFIX = "static/images/pic_"

class ArticleModel {

	constructor(opts = {
		            link: '',
		            img: '',
		            title: '',
		            subtitle: '',
		            date: ''
	            }) {

		Object.assign(this, opts)

	}

}

// let ArticleData = new Array()
//
// for (let i = 0; i < 4; i++) {
// 	ArticleData.push(new ArticleModel(
// 		{
// 			link: '',
// 			img: SUFFIX + (i > 7 ? i - 7 : i + 1) + '.jpg',
// 			title: 'Food &amp; Drink',
// 			subtitle: "We Eat and Drink All Night",
// 			date: "March 6th, 2016"
// 		}
// 	))
// }

let ArticleData = [
	{
		link: '',
		img: `${SUFFIX}2.jpg`,
		title: 'Coding',
		subtitle: "Life-long learning",
		date: "2016"
	},
	{
		link: '',
		img: `${SUFFIX}1.jpg`,
		title: 'Writing',
		subtitle: "Life-long writing.",
		date: "2007"
	},
	{
		link: '',
		img: `${SUFFIX}3.jpg`,
		title: 'Clip',
		subtitle: "Life-long learning",
		date: "2016"
	},
	{
		link: '',
		img: `${SUFFIX}4.jpg`,
		title: 'Singing',
		subtitle: "Life-long learning",
		date: "2016"
	}
]





export default ArticleData;
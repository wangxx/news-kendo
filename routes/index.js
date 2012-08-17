/*
 *  路由控制
 */
/*
 * mongoose数据库使用
 * Schema定义
 * Model定义
 */
var mongoose = require('mongoose'), db = mongoose.createConnection('localhost', 'test');
db.on('error', console.error.bind(console, 'connection error:')); 
var newsSchema = new mongoose.Schema({
	title : String,
	content : String,
	type : String,
	tag : String,
	isPublish : Boolean
})
var News = db.model('News', newsSchema);

/*
 * 新闻增删改差
 */
exports.createNews = function(req, res) {
	var models = JSON.parse(req.query.models); 
	var cont=0;
	for(var i in models){ 
		var news = News(models[i]);
		news.save(function(err){
			cont++;
			if(err){
				res.send(err);
			}else{
				if(cont ==models.length)
				res.send('ok');
			}
		});
	}; 
}
exports.updateNews = function(req, res) {

}
exports.getNews = function(req, res) {

}
exports.removeNews = function(req, res) {

}
exports.getNewsList = function(req, res) {
	News.find(function(err, news) {
		if (err) {
			res.send(err);
		} else {
			res.send(news)
		}
	})
}
/*
 * 首页显示
 */
exports.index = function(req, res) {
	res.render('index', {
		title : 'Express'
	});
};

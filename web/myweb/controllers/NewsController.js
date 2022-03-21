class NewsController{
    //[GET] / news
    index(req,res){
        res.render('news')
    }
    //[GET] /news/:slug
    show(req,res){
        res.send('Page con cua news')
    }
}

module.exports = new NewsController
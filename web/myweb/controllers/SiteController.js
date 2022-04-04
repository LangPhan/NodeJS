const Course = require('../model/Coures')

class SiteController{
    //[GET] / 
    index(req,res,next){
        Course.find({})
            .then(courses => res.render('index',{courses}))
            .catch(next)       

        // res.render('index')
    }
    //[GET] /news/:slug
    search(req,res){
        res.render('search')
    }
}

module.exports = new SiteController
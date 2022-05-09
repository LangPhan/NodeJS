const { response } = require('../app');
const Course = require('../model/Coures')

class MeController{
    //[GET] /me/stored/coures
    storedCourses(req,res,next){
        Course.find({})
        .then(course => {
            res.render('me/stored-courses',{course})  
         })
         .catch(next); 
    }
}

module.exports = new MeController
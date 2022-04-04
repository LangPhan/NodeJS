const { response } = require('../app');
const Course = require('../model/Coures')

class CourseController{
    //[GET] /course/:slug

    show(req,res,next){
        Course.findOne({slug: req.params.slug})
        .then(course => {
           res.render('courses/show',{course})  
        })
        .catch(next);
    }
    //[GET] /coure/create
    create(req,res,next){
        res.render('courses/create')
    }

    //[POST] /coure/store
    store(req,res,next){
       const course = new Course(req.body)
       course.save()
            .then(()=> res.redirect('/'))
            .catch(error =>{
                
            })
    }
}

module.exports = new CourseController
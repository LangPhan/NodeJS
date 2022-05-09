const { response } = require('../app');
const User = require('../model/User')

class UserController{
    //[GET] /user/:slug

    show(req,res,next){
        User.find({})
        .then(users =>res.render('users/show',{users}))
        .catch(next)       
    }
    //[GET] /user/create
    // create(req,res,next){
    //     res.render('users/create')
    // }

    // //[POST] /user/store
    // store(req,res,next){
    //    const user = new User(req.body)
    //    user.save()
    //         .then(()=> res.redirect('/'))
    //         .catch(error =>{
                
    //         })
    // }
}

module.exports = new UserController
const mongoose = require('mongoose')
async function connect() {
    try{
        await mongoose.connect('mongodb+srv://lang_DB:<Xh8UAFhAypOsUvC0>@cluster0.yqu0o.mongodb.net/fisrt_project?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTophology: true
        });
        console.log('Good')
    }catch(error){
        console.log('Not good')
        console.log(error)
    }
}

module.exports = {connect}
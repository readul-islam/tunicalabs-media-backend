const mongoose = require('mongoose');

const dataConnect=()=>{
 
    mongoose.connect(`mongodb+srv:${process.env.DB_USER}//${process.env.DB_PASS}:@cluster0.vggy0hh.mongodb.net/tunicalabs`).then(data =>{
        console.log('Successfully connected');
    }).catch(error =>{
        console.log(error);
    })

    
 


}


module.exports =dataConnect;
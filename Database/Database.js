const mongoose = require('mongoose');

const dataConnect=()=>{
 
    mongoose.connect(process.env.DB_URI).then(data =>{
        console.log('Successfully connected');
    }).catch(error =>{
        console.log(error);
    })

    
 


}


module.exports =dataConnect;
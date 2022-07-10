const mongoose = require('mongoose');

const dataConnect=()=>{
 
    mongoose.connect(process.env.DB_URI,{  useNewUrlParser: true,
        useUnifiedTopology: true,}).then(data =>{
        console.log('Successfully connected');
    }).catch(error =>{
        console.log(error);
    })

    
 


}


module.exports =dataConnect;
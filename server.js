const app = require("./app");
const dataConnect = require("./Database/Database");
require("dotenv").config();
const port = process.env.PORT || 8080;

dataConnect();

app.get('/',(req,res)=>{
    res.send({success:true})
    })
    
app.listen(port,()=>{
    console.log('running on ' ,port);
})

const mongoose = require('mongoose');
let compass_url = "mongodb://localhost:27017/sampledb"
let mongodb_url="mongodb+srv://chriz:2255Chriz@cluster0.qwdfjr4.mongodb.net/firstDB?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(mongodb_url).then(()=>{
    console.log("db connected");
})
.catch((err)=>{
    console.log(err);
});
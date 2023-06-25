const mongoose = require('mongoose');
const url = 'mongodb+srv://rdevverman:RX1cuvjh2vaPvSov@cluster0.ltacmtf.mongodb.net/issusetracker';
// mongoose.connect('url') 

(async function  connect(){
    try {
        await mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true});
        console.log('database is connected');

        
    } catch (error) {
        console.log('error in connection to database',error);
    }

})()


// const db=mongoose.connection;

// //If any Error then Getting this Line
// db.on('error',console.error.bind(console,"Error connecting to MongoDB"));   


// db.once('open',()=>{
//     console.log("Connected to Database :: MongoDB ")
// });

module.exports=mongoose.connection;  //Exports db

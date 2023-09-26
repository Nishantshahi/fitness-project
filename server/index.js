const express=require('express');
const cors=require('cors')
const app=express();
const mongoose=require('./Database/database_connection.js')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use(require('./Routes/databaseRoutes'));
app.listen(8080,()=>{
    console.log("Server is up and running on port 8080")
})
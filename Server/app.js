const express=require('express');
const mysql=require('mysql');

//create connection for sql
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'imagedb'
});

//connect
db.connect((err)=>{
    if(err){
        throw err;
    }else{
        console.log('sql connected');
    }
});

const app=express();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });


//get data
app.get('/mydata',(req,res)=>{
    let sql='SELECT * FROM IMAGES';
    db.query(sql,(err,result)=>{
        if(err){
            throw err;
        }else{
            console.log('data got');
            res.send(result);
        }
    })
})

app.listen('3000',()=>{
    console.log('server running');
});
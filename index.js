const express = require("express");

const app = express();



app.get("/home",(req,res)=>{
      res.send("hello");
      console.log("hello");
});
app.get("/books",(req,res)=>{
   var data=[
             {name:"book1"},
             {name:"book2"},
             {name:"book3"},
             {name:"book4"}
            ];
            data=JSON.stringify(data)
   res.send(data);
   console.log(data);
  
})

app.listen(5000);

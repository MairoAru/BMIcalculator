const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true})); 

app.get("/", function(req, res){
    res.sendFile(__dirname+'/index.html');
});
app.post("/",function(request , res) {
    console.log(request.body);
    let num1 = Number(request.body.num1);
    let num2 = Number(request.body.num2);
    let result = num1 / (num2 * num2);
    if(result < 20){
        res.send(`Olete alakaalus ${num1} / (${num2} * ${num2}) = ${result}`);
    }
    else if(result > 20.1 &&  result < 24){
        res.send(`Olete ideaalkaalus ${num1} / (${num2} * ${num2}) = ${result}`);
    }
    else if(result > 24.1 && result < 30){
        res.send(`Olete ylekaalus ${num1} / (${num2} * ${num2}) = ${result}`);
    }
    else(result > 30.1);{
        res.send(`Olete rasvunud ${num1} / (${num2} * ${num2}) = ${result}`);
    }
    
});


app.listen(3000, function(){
    console.log("server is running on port 3000");
});
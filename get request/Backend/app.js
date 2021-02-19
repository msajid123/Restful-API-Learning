const express = require('express');
var request =require('request');
const app = express()
const port = 5000

app.get('/intro', (req, res) => {
  res.send('Hello M SAJID WELCOME TO MY SITE!')
})
app.get('/about', (req, res) => {
    request(
    "http://api.plos.org/search?q=title:DNA",
    function (error, response, body){
        if(!error && response.statusCode==200){
            var parsedBody=JSON.parse(body);
            var numFound =parsedBody["response"]["numFound"];
            res.send({numFound});
        }
    }
    );
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.send(`
    <html>
     <head>
       <title>My  site</title>
     </head>
     <body>
       <h1>Hello World</h1>
     </body>
    </html>
  `)
})

app.get('/puppies', (request, response) => {
  response.send(`
    <html>
     <head>
       <title>My  site</title>
     </head>
     <body>
       <h1>Hello Puppies</h1>
     </body>
    </html>
  `)
})

app.get('/kittens/:kitty', (request, response) => {
  let kitty = request.params.kitty;
  response.send(`
    <html>
     <head>
       <title>My  site</title>
     </head>
     <body>
       <h1>Hello ${kitty}</h1>
     </body>
    </html>
  `)
})


app.listen(1337, () =>{
  console.log('listening on port 1337')
})



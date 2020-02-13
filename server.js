const express = require("express");
const app = express();
const port = 3000;


app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.post("/api/animal", (request, response) => {
  //response.status(201).send('')
  // response.status(404).send('{"code:404, "message":"Category \'master\' does not exist."}')
  response
    .status(422)
    .send(
      '{"code": 422, "message": "Validation failed.","errors": [{"field": "name","message": "This value should not be blank."}]}'
    );
});

app.listen(port, err => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening on ${port}`);
});

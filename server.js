const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/api/animal", (request, response) => {
 
  if (!request.body.name) {
    return response
      .status(422)
      .send(
        '{"code": 422, "message": "Validation failed.","errors": [{"field": "name","message": "This value should not be blank."}]}'
      );
  } else if (!request.body.category) {
    return response
      .status(404)
      .send('{"code:404, "message":"Category \'master\' does not exist."}');
  }

  const insertAnimal = {
   
    name: request.body.name
  };
  //db.push(insertAnimal);
  return response.status(201).send({
    success: "true",
    message: "added successfully",
    insertAnimal
  });
});

app.listen(port, err => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening on ${port}`);
});

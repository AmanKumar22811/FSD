const http = require("http");
const PORT = 2527;

const server = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "text/html");

  const data = await fetch("https://fakestoreapi.com/products");
  const dataJson = await data.json();
  console.log(dataJson[0].category);

  res.end(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
    .container{
      display:grid;
      grid-template-columns:repeat(3,1fr);
    }
      .box{
        height:450px;
        width:400px;
        border:2px solid black;
        padding:10px;
        background-color:beige;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;

      }
    </style>
  </head>
  <body>
    <div class="container">
      ${dataJson.map((item) => {
        return `<div class="box">
          <div>${item.id}</div>
            <div><img src=${item.image} height="200px" width="200px"/></div>
            <div>${item.price}</div>
            <div>${item.description}</div>
            <div>${item.category}</div>
          </div>`;
      })}
    </div>
  </body>
</html>
`);
});
server.listen(PORT);

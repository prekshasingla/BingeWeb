const express = require('express');
const app = express();
const path = require('path');
const PublicPath = path.join(__dirname , "/dist");

app.use(express.static(PublicPath));

app.get('/',function (req,res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(process.env.port || 3000,function () {
  console.log('server has started');
});

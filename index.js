let express = require('express');
let bodyParser = require('body-parser')
let cors = require('cors')

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use((req, res) => {
  res.send('Blueprint for Justice');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// dependencies
const express = require('express');
const cors = require('cors');

// own files
const { nodeEnv } = require('./config/config.js');

// initialization
const app = express();

// settings
app.set('port', process.env.PORT || 5000);

// middlewares
if (nodeEnv === 'development') {
  const morgan = require('morgan');
  app.use(morgan('dev'));
}

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json({
  limit: '100mb'
}));

// cors configuration
const whiteList = [
  'http://localhost'
];
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);

    if (whiteList.indexOf(origin) !== -1) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS policy'));
    }
  }
};
app.use(cors(corsOptions));

// routes

// starting server
const startServer = () => {
  app.listen(app.get('port'), () => console.log(`API is running on port ${app.get('port')}`));

  app.get('/', (req, res) => {
    res.status(200).send({
      statusCode: 200,
      status: 'Ok',
      message: `API is running on port ${app.get('port')}`,
      error: false
    })
  });
};

module.exports = {
	startServer
}

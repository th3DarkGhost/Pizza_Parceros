const mongoose = require('mongoose');

const uri = process.env.URI_MONGO
  ? process.env.URI_MONGO
  : console.log('No tiene enlace a la BD');

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;

connection.once('open', () => console.log('DB is Connected'));

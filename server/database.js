const mongoose = require('mongoose');
const Mockgoose = require('mockgoose').Mockgoose;
const mockgoose = new Mockgoose(mongoose);
const fillDB = require('../server/utils/fillDB')

mongoose.set('useUnifiedTopology', true);

switch (process.env.NODE_ENV) {
  case 'test':
    mockgoose.prepareStorage().then(function () {
      mongoose.connect("", {
          useNewUrlParser: true,
          useFindAndModify: false
        })
        .then(db => console.log('Test virtual-db is connected'))
        .catch(err => console.error(err));
    });
    break;
  case 'development':
    mongoose.connect(process.env.MONGO_URI_DEV, {
        useNewUrlParser: true,
        useFindAndModify: false
      })
      .then(db => {
        console.log('Development db is connected')
        fillDB()
      })
      .catch(err => console.error(err));
    break;

  case 'production':
    mongoose.connect(process.env.MONGO_URI_PROD, {
        useNewUrlParser: true,
        useFindAndModify: false
      })
      .then(db => {
        console.log('Production db is connected')
      })
      .catch(err => console.error(err));
    break;
  default:
    break;
}

module.exports = mongoose;
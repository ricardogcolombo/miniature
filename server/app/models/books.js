var fs = require('fs');
module.exports =
  function(app, express, config) {

    var api = express.Router();

    // this function returns the elements inside the books directory
    app.get('/books',
      function(req, res) {
        fs.readdir(config.directory, function(err, files) {
          var i,
            len;

          if (err) {
            console.error(err.stack);
            res.status(500).send('Something broke!');
          }
          res.send(files);
        });

      });

    // var Schema = mongoose.Schema;

    // var booksSchema = new Schema({
      // title: String,
      // author: String,
      // body: String,
      // comments: [{
        // body: String,
        // date: Date
      // }],
      // date: {
        // type: Date,
        // default: Date.now
      // },
      // hidden: Boolean,
      // meta: {
        // votes: Number,
        // favs: Number
      // }
    // });


    return api;

  };

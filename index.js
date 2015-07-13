var request = require('request');

module.exports = {
  send: function(from, to, message, callback) {

    var url = 'http://www.findu.com/cgi-bin/sendmsg.cgi';
    var propertiesObject = { fromcall:from, tocall:to, msg: message };

    request({url:url, qs:propertiesObject}, function(err, response, body) {
      if(err) { console.log(err); return callback(err); }
      // console.log('response', response);
      // console.log('body', body);
      return callback(null, body);
    });
  },

  get: function(from, callback) {

    var url = 'http://api.aprs.fi/api/get';
    var propertiesObject = { what:'msg', dst:from, apikey: '27286.QJTmrxJGMvlNh', format:'json' };

    request({url:url, qs:propertiesObject}, function(err, response, body) {
      if(err) { console.log(err); return callback(err); }
      // console.log('response', response);
      // console.log('body', body);
      return callback(null, body);
    });
    // request.get({url:url, qs:propertiesObject})
    //   .end(function(err, body) {
    //     if(err) { console.log(err); return callback(err); }
    //     // console.log('response', response);
    //     console.log('body', body);
    //     callback(null, body);
    //   });


  }
};

Send and Receive APRS Messages
---

var aprs = require('aprs');
var send = aprs.send(fromCallsign, toCallsign, message);
var get = aprs.get(toCallsign);


API Notes
---

Send APRS
http://www.findu.com/cgi-bin/sendmsg.cgi?fromcall=N7ICE&tocall=73S&msg=testing123

Check APRS:
http://api.aprs.fi/api/get?what=msg&dst=73S&apikey=27286.QJTmrxJGMvlNh&format=json

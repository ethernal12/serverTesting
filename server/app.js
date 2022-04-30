var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyLogger = require('morgan-body');
const cors = require('cors');

var paymentsRouter = require('./routes/payments');
var connectionsRouter = require('./routes/connections');
var variablesRouter = require('./routes/variables');
var appointmentsRouter = require('./routes/appointments');
var messagesRouter = require('./routes/messages');
var metaRouter = require('./routes/meta');

var app = express();


app.use(cors());
app.use(express.json());
// bodyLogger(app, {
//   timezone: false,
//   logReqUserAgent: false,
//   logReqHeaderList: false,
//   logAllReqHeader: false,
//   logIP: false,
//   skip: (req, res) => {
//     return req.method === 'GET';
//   }
// });
// bodyLogger(app, {
//   timezone: false,
//   logReqUserAgent: false,
//   logReqHeaderList: false,
//   logAllReqHeader: false,
//   logIP: false,
//   logRequestBody: false,
//   logResponseBody: false,
//   skip: (req, res) => {
//     return req.method !== 'GET';
//   }
// });

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/payments', paymentsRouter);
app.use('/connections', connectionsRouter);
app.use('/variables', variablesRouter);
app.use('/appointments', appointmentsRouter);
app.use('/messages', messagesRouter);
app.use('/meta', metaRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err.stack.split('\n'): true;

  // render the error page
  res.status(err.status || 500);
  res.json(res.locals);
});

module.exports = app;

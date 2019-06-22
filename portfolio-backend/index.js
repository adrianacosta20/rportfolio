
var port = process.env.PORT || 8888;
var express = require('express');
var app = express();
var session = require('express-session');
var flash = require('connect-flash');
var morgan = require('morgan');
var path = require('path');
var nodemailer = require('nodemailer');


app.use(morgan('dev'));
app.set('view engine', 'ejs');

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// required for passport
app.set('trust proxy', 1); // trust first proxy

app.use(session({
    secret: 'secretsecretsecretpaper',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false
    }
}));

app.use(flash());

global.rootDir = path.resolve(__dirname);

app.listen(port);

console.log("Server listening on port " + port);

app.post('/email', (req, res) => {
    console.log('body', req.body);
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'mlmswebapp@gmail.com',
            pass: 'LMs!1234'
        }
    });
    var mailOptions = {
        from: req.body.name,
        to: 'acostaadrian21@gmail.com',
        html: `
            <div>
                <h1>${req.body.name}</h1>
                <p> Email: ${req.body.email}</p>
                <p> Mobile Number: ${req.body.mobile}</p>
                <p> ${req.body.message}</p>
            </div>
            `,
        subject: 'Portfolio Inquiry'
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log('error', error);
            res.send('Something went wrong. Error: \n' + error);
        } else {
            res.send({ 0: 'Sent' });
        };
    });
});
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const routes = require('./routes/ToDoRoute');
const path = require('path');
const expressWinston = require('express-winston');
const { transports, format } = require('winston');
const logger = require('./logger');
const apiMetrics = require('prometheus-api-metrics');

const app = express();
app.use(express.json());
app.use(cors());
app.use(apiMetrics());
app.use(
    expressWinston.logger({
        winstonInstance: logger,
        statusLevels: true,
    }),
);

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Mongodb Connected...'))
    .catch((err) => console.error(err));

// Routes
app.use(routes);
app.use(
    expressWinston.errorLogger({
        transports: [
            new transports.File({
                filename: 'logs/logs_InternalErrors.log',
            }),
        ],
        format: format.combine(format.json(), format.timestamp()),
        // format: format.combine(
        //     format.metadata(),
        //     format.prettyPrint(), // for dev
        //     format.timestamp(),
        //     format.json(),
        //     enumerateErrorFormat(),
        // ),
    }),
);
// // --------------------------deployment------------------------------

// console.log(path.join(__dirname, '..', 'frontend'));
// if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV == undefined) {
//     app.use(express.static(path.join(__dirname, '..', '/frontend/build')));
//     app.get('/myserver', (req, res) => {
//         res.json({
//             server: process.env.PORT,
//             Real_IP: req.headers['x-real-ip'],
//             'X-Forwarded-For': req.headers['x-forwarded-for'],
//         });
//     });
//     app.get('*', (req, res) =>
//         res.sendFile(path.resolve(__dirname1, '..', 'frontend', 'build', 'index.html')),
//     );
// } else {
//     app.get('/', (req, res) => {
//         res.send('API is running..');
//     });
// }

// // --------------------------deployment------------------------------

app.listen(process.env.PORT || 8080, () =>
    console.log('Server running on port ' + process.env.PORT || 8080),
);

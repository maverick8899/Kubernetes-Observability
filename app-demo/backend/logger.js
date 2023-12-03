const { createLogger, format, transports } = require('winston');

module.exports = logger = createLogger({
    transports: [
        new transports.Console(),
        new transports.File({
            level: 'info',
            filename: './logs/log_Info.log',
        }),
        new transports.File({
            level: 'warn',
            filename: './logs/log_Warning.log',
        }),
        new transports.File({
            level: 'error',
            filename: 'logs/log_Erroring.log',
        }),
    ],

    format: format.combine(
        format.json(),
        format.timestamp(),
        // format.prettyPrint(),  #* for dev
        // format.metadata(),
    ),
    statusLevels: true,
});

module.exports = apps = [
    {
        name: 'C/1',
        namespace: 'chat',
        script: './backend/server.js',
        watch: true,
        //exec_mode: 'cluster',
        //instances: 1,
        //Control flow
        max_memory_restart: '150M',
        autorestart: true,
        restart_delay: 5000,
        min_uptime: 5000,
        ignore_watch: [
            'logs',
            '*.log',
            'uploads/*',
            './backend/node_modules',
            './frontend/node_modules',
            './backend/package-lock.json',
            './frontend/package-lock.json',
        ], //Logs
        log_date_format: 'YYYY-MM-DD HH:mm Z',
        error_file: 'logs/chat-error.log',
        out_file: 'logs/chat-out.log',
        merge_logs: true,
        // ENV
        env_production: {
            NODE_ENV: 'production',
        },
        env: {
            PORT: 801,
            MONGO_URI:
                'mongodb+srv://maverick:toisethanhcong2003@cluster0.mfjoicd.mongodb.net/Chat',
        },
    },
    {
        name: 'C/2',
        namespace: 'chat',
        script: './backend/server.js',
        watch: true,
        //exec_mode: 'cluster',
        //instances: 1,
        //Control flow
        max_memory_restart: '150M',
        autorestart: true,
        restart_delay: 5000,
        min_uptime: 5000,
        ignore_watch: [
            'logs',
            '*.log',
            'uploads/*',
            './backend/node_modules',
            './frontend/node_modules',
            './backend/package-lock.json',
            './frontend/package-lock.json',
        ], //Logs
        log_date_format: 'YYYY-MM-DD HH:mm Z',
        error_file: 'logs/chat-error.log',
        out_file: 'logs/chat-out.log',
        merge_logs: true,
        // ENV
        env_production: {
            NODE_ENV: 'production',
        },
        env: {
            PORT: 802,
            MONGO_URI:
                'mongodb+srv://maverick:toisethanhcong2003@cluster0.mfjoicd.mongodb.net/Chat',
        },
    },
    {
        name: 'C/3',
        namespace: 'chat',
        script: './backend/server.js',
        watch: true,
        //exec_mode: 'cluster',
        //instances: 1,
        //Control flow
        max_memory_restart: '150M',
        autorestart: true,
        restart_delay: 5000,
        min_uptime: 5000,
        ignore_watch: [
            'logs',
            '*.log',
            'uploads/*',
            './backend/node_modules',
            './frontend/node_modules',
            './backend/package-lock.json',
            './frontend/package-lock.json',
        ],
        //Logs
        log_date_format: 'YYYY-MM-DD HH:mm Z',
        error_file: 'logs/chat-error.log',
        out_file: 'logs/chat-out.log',
        merge_logs: true,
        // ENV
        env_production: {
            NODE_ENV: 'production',
        },
        env: {
            PORT: 803,
            MONGO_URI:
                'mongodb+srv://maverick:toisethanhcong2003@cluster0.mfjoicd.mongodb.net/Chat',
        },
    },
];

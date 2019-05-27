module.exports = {
    '/api': {
        // target: 'http://10.240.200.127:8094',
        target: 'http://10.240.200.148:8091', // ding 2
        // target: 'http://10.242.32.79:8091', // di
        pathRewrite: {
            '^/api': '/api'
        }
    },
    '/auth': {
        // target: 'http://10.240.200.127:8094',
        target: 'http://10.240.200.148:8091', // ding 2
        // target: 'http://10.242.32.79:8091', // di
        pathRewrite: {
            '^/auth': '/auth'
        }
    },
}
module.exports = {
    '/api': {
        target: 'http://127.0.0.1:8091',
        pathRewrite: {
            '^/api': '/api'
        }
    },
    '/auth': {
        target: 'http://127.0.0.1:8091',
        pathRewrite: {
            '^/auth': '/auth'
        }
    },
}
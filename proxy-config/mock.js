module.exports = {
    '/api': {
        target: 'http://127.0.0.1:3000',
        pathRewrite: {
            '^/api': '/api'
        }
    },
    '/auth': {
        target: 'http://127.0.0.1:3000',
        pathRewrite: {
            '^/auth': '/auth'
        }
    },
}
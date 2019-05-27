const pkg = require('./package');
const proxyConfig = require('./proxy-config/index.js');
module.exports = {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        title: pkg.name,
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: pkg.description}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ],
    },

    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#fff'},

    /*
    ** Global CSS
    */
    css: [
        'element-ui/lib/theme-chalk/index.css',
        '@/assets/css/main.scss'
    ],
    vue:{
        mixins:[]
    },
    router: {
        middleware: 'login-auth'
    },
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        // '@/plugins/element-ui'
        '@/plugins/router-filter',
        {src: '@/plugins/element-ui', ssr: true},
        {src: '@/plugins/aixos-config', ssr: true }
    ],
    /*
    ** Build configuration
    */
    build: {
        vendor: ['axios'],
        transpile: [/^element-ui/],
        /*
        ** You can extend webpack config here
        */
        extend (config, ctx) {
        }
    },
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/proxy'
    ],
    axios: {
        proxy: true,
        credentials: true,
    },
    server: {
        port: process.env.NODE_ENV === 'mock' ? 8082 : 80, // default: 3000
        host: '127.0.0.1', // default: localhost
    },
    proxy: proxyConfig
}
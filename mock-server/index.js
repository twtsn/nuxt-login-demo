var koa = require('koa');
var router = require('koa-router')();
var koaBody = require('koa-body')();
var mockData = require('./mock-data/index');

var app = new koa();
app.use(async (ctx, next) => {
    var path = ctx.request.path;
    console.info('mock request url: ', path);
    for(var key in mockData){
        if(key.indexOf(path) >-1 ) {
            ctx.response.body =  mockData[key];
            return;
        }
    }
    //
    // if(['/auth/login', '/auth/logout'].indexOf(path) > -1 ){
    //     ctx.redirect('/')
    // } else {
    //
    // }
});

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3000,function() {
    console.log('start...')
})
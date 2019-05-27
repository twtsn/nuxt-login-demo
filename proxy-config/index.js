const mockConfig = require('./mock');
const dev = require('./development');
const test = require('./test');
const prod = require('./production');

var config = prod;
console.info('process.env.NODE_ENV', process.env.NODE_ENV);
if(process.env.NODE_ENV === 'mock'){
    // nuxtServerInit 中获取process.env.NODE_ENV 还是development,暂未找到原因，直接使用全局变量判断
    process.env.isMock = true;
    config = mockConfig;
} else if(process.env.NODE_ENV === 'development'){
    config = dev;
} else if(process.env.NODE_ENV === 'test'){
    config = test;
}
module.exports = config;
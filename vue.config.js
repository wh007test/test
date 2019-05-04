const path = require('path');

const resolve = dir => path.join(__dirname, dir);

module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@style', resolve('src/assets/styles'))
            .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
            .set('_c', resolve('src/components'))
            .set('public', resolve('public'));
    }
}

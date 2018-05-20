const { injectBabelPlugin } = require('react-app-rewired')
module.exports = function override(config, env) {
    //按需引入antd
    config = injectBabelPlugin([
        'import',
        {libraryName:'antd-mobile', style:'css'}
    ], config)

    //注解支持
    config = injectBabelPlugin(['transform-decorators-legacy'], config)
    
    return config
}
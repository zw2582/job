const { injectBabelPlugin } = require('react-app-rewired')
const rewireSvgReactLoader = require('react-app-rewire-svg-react-loader');

module.exports = function override(config, env) {
    //按需引入antd
    config = injectBabelPlugin([
        'import',
        {libraryName:'antd-mobile', style:'css'}
    ], config)

    //注解支持
    config = injectBabelPlugin(['transform-decorators-legacy'], config)

    //svg
    config = rewireSvgReactLoader(config, env);
    
    return config
}
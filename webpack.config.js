const pkg = require('./package.json')

const config = require('./lib/webpack-config/vue')

module.exports = function (env) {
    return config(env, {
        name: pkg.name,
        root: __dirname,
        port: 3000
    })
}

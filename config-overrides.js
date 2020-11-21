// const path = require('path')
const rewireStyledComponents = require('react-app-rewire-styled-components')
const Dotenv = require('dotenv-webpack')

module.exports = override = (config, env) => {
  // config.resolve.alias = {
  //   ...config.resolve.alias,
  //   '~': path.resolve(process.cwd(), 'src'),
  //   '@stylesJS': path.resolve(process.cwd(), 'src/styles/css-in-js'),
  //   '@styles': path.resolve(process.cwd(), 'src/styles/sass'),
  // }
  config.plugins = [
    ...config.plugins,
    new Dotenv({ path: './.env' }),
    new Dotenv({
      path: process.env.NODE_ENV === 'development' ? './.env.development' : './.env.production',
    }),
  ]
  config = rewireStyledComponents(config, env, {
    displayName: false,
    minify: false,
    pure: true,
  })

  return config
}

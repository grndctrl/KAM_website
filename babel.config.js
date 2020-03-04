module.exports = function (api) {
  api.cache(true)

  const presets = [
    [
      '@babel/preset-env', {
        useBuiltIns: "usage", // or "entry"
        corejs: 3,
        targets: {
          browsers: ['> 0.5%', 'last 5 versions', 'ie >= 10']
        }
      }
    ]
  ]
  const plugins = []

  return {
    presets,
    plugins
  }
}
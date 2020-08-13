module.exports = {
  plugins: [
    require('autoprefixer')({
      overrideBrowserslist: [
        'defaults',
        'last 2 version',
        '>1%',
        'not ie < 11',
        'ios 7',
        'last 3 iOS versions'
      ]
    })
  ]
}

require('babel-core/register')({
  presets: [
    'react-native',
  ],
  plugins: [
    'transform-object-rest-spread',
  ],
});

require('./script');
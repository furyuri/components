const webpack = require('webpack');

module.exports = {
  stories: ['../src/**/stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: config => {
    config.plugins.push(new webpack.DefinePlugin({'process.env': {ANY_SEED: JSON.stringify(0.4070123094134033)}}));

    return config;
  }
};

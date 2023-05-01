module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.(woff2?|ttf|eot|svg)$/,
        loader: 'null-loader',
      });
    }

    return config;
  },
};

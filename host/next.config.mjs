import NextFederationPlugin from '@module-federation/nextjs-mf';

const nextConfig = {
  webpack: (config) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        filename: "static/chunks/mainRemoteEntry.js",
        remotes: {
          remote: 'remote@http://localhost:3001/_next/static/chunks/remoteEntry.js',
        },
        shared: {
          react: { singleton: true, requiredVersion: false },
          'react-dom': { singleton: true, requiredVersion: false },
        },
        extraOptions: {}
      })
    );
    return config;
  },
};

export default nextConfig;

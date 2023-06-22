module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('dx92aia72'),
        api_key: env('234573164313833'),
        api_secret: env('7frwDUnzPWZ9MchefyxRSS84o38'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
});
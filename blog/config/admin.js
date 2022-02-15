module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'db80949994fe24e129d1ca4f39b21ca2'),
  },
});

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'easylot-strapi-db.c8nj2hzlwasj.eu-central-1.rds.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'easylot_strapi_db'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'zn1shONKHAuUt69DV1wg'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});

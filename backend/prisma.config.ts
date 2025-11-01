import { defineConfig } from 'prisma/config';

export default defineConfig({
  schema: 'src/prisma/schema.prisma',
  migrations: {
    path: 'src/prisma/migrations',
  },
  engine: 'classic',
  datasource: {
    url: process.env.DATABASE_URL ?? '',
  },
});

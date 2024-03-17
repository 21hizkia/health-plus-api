import dotenv from 'dotenv';

dotenv.config();

export default {
  app: {
    name: process.env.APP_NAME || 'healthplus',
    url: process.env.APP_URL || 'http://localhost',
    port: process.env.APP_PORT || 3000,
  },
  jwt: {
    publicKey: process.env.JWT_PUBLIC_KEY,
    privateKey: process.env.JWT_PRIVATE_KEY,
    expiresIn: process.env.JWT_EXPIRES_IN,
    refreshIn: process.env.JWT_REFRESH_IN,
  },
  bcrypt: {
    saltRounds: process.env.BCRYPT_SALT_ROUNDS,
  },
};

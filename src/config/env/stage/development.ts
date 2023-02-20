const {
  DB_HOST_DEV,
  DB_PORT_DEV,
  DB_USERNAME_DEV,
  DB_PASSWORD_DEV,
  BD_NAME_DEV,
} = process.env;

export default () => ({
  DB_HOST_DEV,
  DB_PORT_DEV,
  DB_USERNAME_DEV,
  DB_PASSWORD_DEV,
  BD_NAME_DEV,
});

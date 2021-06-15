const { APP_CONFIG = {} } = window;

const config = {
  apiBasePath: APP_CONFIG.API_BASE_PATH || "http://localhost:3456",
};

export default config;

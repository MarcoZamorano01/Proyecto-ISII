class ConfigManager {

  static instance;

  constructor() {

    if (ConfigManager.instance) {
      return ConfigManager.instance;
    }

    this.appName =
      "Vocational AI Platform";

    this.version =
      "1.0.0";

    ConfigManager.instance = this;
  }
}

const config =
  new ConfigManager();

export default config;
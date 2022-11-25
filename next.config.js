// @ts-check
const path = require('path')
const {withBlitz} = require("@blitzjs/next")

/**
 * @type {import('@blitzjs/next').BlitzConfig}
 **/
const config = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // the code below allows camelCase for CSS modules
  webpack: (config) => {
      const rules = config.module.rules
          .find((rule) => typeof rule.oneOf === 'object').oneOf.filter((rule) => Array.isArray(rule.use));
      rules.forEach((rule) => {
          rule.use.forEach((moduleLoader) => {
              if (
                  moduleLoader.loader !== undefined 
                  && moduleLoader.loader.includes('css-loader') 
                  && typeof moduleLoader.options.modules === 'object'
              ) {
                  moduleLoader.options = {
                      ...moduleLoader.options,
                      modules: {
                          ...moduleLoader.options.modules,
                          // This is where we allow camelCase class names
                          exportLocalsConvention: 'camelCase'
                      }
                  };
              }
          });
      });

      return config;
  }
}

module.exports = withBlitz(config)

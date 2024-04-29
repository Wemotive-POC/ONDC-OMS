'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('view')
      .service('myService')
      .getWelcomeMessage();
  },
});

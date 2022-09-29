'use strict';

/**
 * beer-type service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::beer-type.beer-type');

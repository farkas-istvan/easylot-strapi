'use strict';

/**
 * enum-value service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::enum-value.enum-value');

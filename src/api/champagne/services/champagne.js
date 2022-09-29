'use strict';

/**
 * champagne service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::champagne.champagne');

'use strict';

/**
 * enum-value router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::enum-value.enum-value');

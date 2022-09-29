'use strict';

/**
 * enum-type router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::enum-type.enum-type');

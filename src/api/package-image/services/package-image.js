'use strict';

/**
 * package-image service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::package-image.package-image');

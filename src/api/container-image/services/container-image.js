'use strict';

/**
 * container-image service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::container-image.container-image');

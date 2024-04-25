'use strict';

/**
 * offer-package service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::offer-package.offer-package');

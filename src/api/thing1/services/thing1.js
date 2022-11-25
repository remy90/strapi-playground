'use strict';

/**
 * thing1 service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::thing1.thing1');

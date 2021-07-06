import { noSep } from './src/module'

/**
 * { 'deploy#in-azure_dev-ops': false, 'deploy#in-dev_mode': true }
 */
const object = { 'deploy#in-azure_dev-ops': false, 'deploy#in-dev_mode': true }

/**
 * camelCasing properties with default _ (underscore) { 'deploy#in-azureDev-ops': false, 'deploy#in-devMode': true }
 */
noSep.sanitizeProperties(object)

/**
 * camelCasing properties with # { 'deployIn-azureDev-ops': false, 'deployIn-devMode': true }
 */
noSep.sanitizeProperties(object, '#')

/**
 * camelCasing properties with - { deployInAzureDevOps: false, deployInDevMode: true }
 */
noSep.sanitizeProperties(object, '-')

/**
 * camelCasing properties with y (letter) { deploInAzureDevOps: false, deploInDevMode: true }
 */
noSep.sanitizeProperties(object, 'y')

/**
 * camelCasing an Array of strings createdClassFunction
 */
noSep.capitalize(['created', 'class', 'function'])

/**
 * Capitalizing the string "created" Created
 */
noSep.capitalize('created')

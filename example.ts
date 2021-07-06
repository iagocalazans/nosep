import { noSep } from 'nosep'

/**
 * { 'deploy#in-azure_dev-ops': false, 'deploy#in-dev_mode': true }
 */
const object = { 'deploy#in-azure_dev-ops': false, 'deploy#in-dev_mode': true }
console.log(object)

/**
 * camelCasing properties with default _ (underscore) { 'deploy#in-azureDev-ops': false, 'deploy#in-devMode': true }
 */
const underscore = noSep.sanitizeProperties(object)
console.log(underscore)
/**
 * camelCasing properties with # { 'deployIn-azureDev-ops': false, 'deployIn-devMode': true }
 */
const hashtag = noSep.sanitizeProperties(object, '#')
console.log(hashtag)

/**
 * camelCasing properties with - { deployInAzureDevOps: false, deployInDevMode: true }
 */
const line = noSep.sanitizeProperties(object, '-')
console.log(line)

/**
 * camelCasing properties with y (letter) { deploInAzureDevOps: false, deploInDevMode: true }
 */
const y = noSep.sanitizeProperties(object, 'y')
console.log(y)

/**
 * camelCasing an Array of strings createdClassFunction
 */
const camelCase = noSep.capitalize(['created', 'class', 'function'])
console.log(camelCase)

/**
 * Capitalizing the string "created" Created
 */
const Capitalize = noSep.capitalize('created')
console.log(Capitalize)

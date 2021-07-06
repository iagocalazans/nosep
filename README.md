<h1 align="center">Welcome to No Separators (nosep) 👋</h1>

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-14.x-blue.svg" />
  <a href="#" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-no-red.svg" />
  </a>
</p>

### This module facilitates the conversion of object properties that have separators to the format used in JS.

## Install
yarn users:
```sh
yarn add nosep
```
npm users:
```sh
npm install nosep
```

Importing:
```js
import { noSep } from 'nosep'
```

---

## Usage:

### Sanitize Object Properties

In the below object we have properties with the most varied forms of used separators. Let's call `.sanitizeProperties(obj, separator)` and check the result after application.

```js
const object = {'deploy#in-azure_dev-ops': false, 'deploy#in-dev_mode': true}

//noSep.sanitizeProperties(object[,separator])

/**
 * camelCasing properties with default '_' (underscore) 
 */ 
noSep.sanitizeProperties(object); // => { 'deploy#in-azureDev-ops': false, 'deploy#in-devMode': true }

/**
 * camelCasing properties with '#'
 */ 
noSep.sanitizeProperties(object, '#'); // => { 'deployIn-azureDev-ops': false, 'deployIn-devMode': true }

/**
 * camelCasing properties with '-'
 */
noSep.sanitizeProperties(object, '-'); // => { deployInAzureDevOps: false, deployInDevMode: true }

/**
 * camelCasing properties with 'y' (letter)
 */
noSep.sanitizeProperties(object, 'y'); // => { deploInAzureDevOps: false, deploInDevMode: true }

```

---


## Aditional Usage:

### CamelCase string Array & Capitalize string

In addition we can use `.capitalize(string)` to generate a `camelCaseBased` string from an Array of strings, or simple Capitalize a string.

```js 
// noSep.capitalize(string[,string[]])

/** 
 * camelCasing an Array of strings
 */
noSep.capitalize(['created', 'class', 'function']); // => createdClassFunction


/** 
 * Capitalizing the string "created"
 */
 noSep.capitalize('created') // => Created
```

---


## Author

👤 **Iago Calazans** (💼 *Senior Node|TypeScript Developer*)

* Website: https://iagocalazans.github.io/
* GitHub: https://github.com/iagocalazans/


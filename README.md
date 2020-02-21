# EZDB

> EZ "Easy" DB

EZDB is an easy to integrate and use for any Node.js Project to manage AWS DynamoDB Tables.

**IN DEVELOPMENT**

## Installation
```bash
# NPM
$ npm install ezdb
```


## Testing
```bash
# Ensure all required Node.js Modules are installed
$ npm install

# Run Tests
$ npm test
```


## Usage
Load Source into Project and Configure AWS Profile
```js
// ES5
const EZDB = require('ezdb');
// ES6
import EZDB from 'ezdb';

// Initialize
const config = {
  accessKeyId: 'xxx',
  secretAccessKey: 'xxx',
  region: 'us-east-1', // Optional
  apiVersion: '2012-08-10', // Optional
};

const EZ = new EZ.Client(config);
```
Options:
* AWS Access Key Id
* AWS Secret Access Key
* API Version [Optional] [Default: 2012-08-10]
* AWS Region [Optional] [Default: us-east-1]


## CLI
Launch EZ CLI Query Editor on Console
```bash
$ ez editor -t [TableName]
$ ez editor --table [TableName]
```

Invoke EZ Action on Console
```bash
$ ez action -t [TableName] [Options]
$ ez action --table [TableName] [Options]
```

## API

# EZDB

> EZ "Easy" DB - AWS DynamoDB Simplified

EZDB is an easy to integrate and use for any Node.js Project.
* EZ Install
* EZ Configuration
* EZ Implementation
* EZ Usage
* EZ Management

EZDB provides an intuitive command line interface for Table and Data management.
EZDB can export DynamoDB SDK Templates for Queries.

---

## Installation
```bash
# NPM
$ npm install ezdb

$ npm -i ezdb

# Configure EZ
$ ez configure
```

---

## Usage
Load Source into Project
```js
// ES5
const EZ = require('ezdb');

// ES6
import EZ from 'ezdb';
```

Launch EZ CLI Query Editor on Console
```bash
$ ez editor -t [TableName]
$ ez editor --table [TableName]
```

Invoke EZ Action on Console
```bash
$ ez action
```

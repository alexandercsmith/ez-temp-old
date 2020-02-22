# EZDB

> EZ "Easy" DB

EZDB is an easy to integrate and use for any Node.js Project to manage AWS DynamoDB Tables.

**IN DEVELOPMENT**

---

## Installation
```bash
# NPM
$ npm install ezdb
```

---

## Testing
```bash
# Ensure all required Node.js Modules are installed
$ npm install

# Run Tests
$ npm test
```

---

## Configuration
EZDB will create and look for `ezdb.config.js` in the Root of your Project.
EZDB will fallback to use Configuration Values if Provided or Default Options.
```js
module.exports = {
  credentials: {
    accessKeyId: 'xxx',
    secretKeyId: 'xxx',
    region: 'us-east-1',
    apiVersion: '2012-08-10'
  },
  tables: [],
  globals: []
};
```
Required:
* `accessKeyId`
* `secretKeyId`

---

## Usage
Initialize EZDB into Project and Configure AWS Profile
```js
const EZDB = require('ezdb');
const config = {
  accessKeyId: 'xxx',
  secretKeyId: 'xxx'
};
const EZ = new EZDB.Client(config);
```
Options:
* AWS Access Key Id
* AWS Secret Access Key
* API Version [Optional] [Default: 2012-08-10]
* AWS Region [Optional] [Default: us-east-1]

---

## CLI
Execute API Actions from the Console
```bash
$ ezdb [Action] [Method] [Options]
```
* Action: API Action
* Method: Action Method to Execute
* Options: JSON Object of Options & Attributes

---

## API

### Initialize
```js
const EZDB = require('ezdb');
const config = {
  accessKeyId: 'xxx',
  secretAccessKey: 'xxx',
  region: 'us-east-1',
  apiVersion: '2012-08-10'
};
const EZ = new EZDB.Client(config);
```

### Tables
* List Tables
  * **API**: `EZ.Table.list(options)`
  * **CLI**: `$ ezdb Table --list <options>`
* Create Table
  * **API**: `EZ.Table.create(options)`
  * **CLI**: `$ ezdb Table --create <options>`
* Describe Table
  * **API**: `EZ.Table.describe(options)`
  * **CLI**: `$ ezdb Table --describe <options>`
* Update Table
  * **API**: `EZ.Table.update(options)`
  * **CLI**: `$ ezdb Table --update <options>`
* Delete Table
  * **API**: `EZ.Table.delete(options)`
  * **CLI**: `$ ezdb Table --delete <options>`
* Query Table
  * **API**: `EZ.Table.query(options)`
  * **CLI**: `$ ezdb Table --query <options>`
* Scan Table
  * **API**: `EZ.Table.scan(options)`
  * **CLI**: `$ ezdb Table --scan <options>`
* Restore Table
  * **API**: `EZ.Table.restore(options)`
  * **CLI**: `$ ezdb Table --restore <options>`
* Describe Table Time to Live
  * **API**: `EZ.Table.describeTTL(options)`
  * **CLI**: `$ ezdb Table --describeTTL <options>`
* Update Table Time to Live
  * **API**: `EZ.Table.updateTTL(options)`
  * **CLI**: `$ ezdb Table --updateTTL <options>`

### Items
* Get Item
  * **API**: `EZ.Item.get(options)`
  * **CLI**: `$ ezdb Item --get <options>`
* Create Item
  * **API**: `EZ.Item.create(options)`
  * **CLI**: `$ ezdb Item --create <options>`
* Update Item
  * **API**: `EZ.Item.update(options)`
  * **CLI**: `$ ezdb Item --update <options>`
* Delete Item
  * **API**: `EZ.Item.delete(options)`
  * **CLI**: `$ ezdb Item --delete <options>`

### Global Tables
* List Global Tables
  * **API**: `EZ.Global.list(options)`
  * **CLI**: `$ ezdb Global --list <options>`
* Create Global Table
  * **API**: `EZ.Global.create(options)`
  * **CLI**: `$ ezdb Global --create <options>`
* Describe Global Table
  * **API**: `EZ.Global.describe(options)`
  * **CLI**: `$ ezdb Global --describe <options>`
* Update Global Table
  * **API**: `EZ.Global.update(options)`
  * **CLI**: `$ ezdb Global --update <options>`
* Update Global Table Settings
  * **API**: `EZ.Global.settings(options)`
  * **CLI**: `$ ezdb Global --settings <options>`

### Batchs
* Batch Get Items
  * **API**: `EZ.Batch.get(options)`
  * **CLI**: `$ ezdb Batch --get <options>`
* Batch Write Items
  * **API**: `EZ.Batch.write(options)`
  * **CLI**: `$ ezdb Batch --write <options>`

### Transactions
* Transact Get Items
  * **API**: `EZ.Transact.get(options)`
  * **CLI**: `$ ezdb Transact --get <options>`
* Transact Write Items
  * **API**: `EZ.Transact.write(options)`
  * **CLI**: `$ ezdb Transact --write <options>`

### Backups
* List Backups
  * **API**: `EZ.Backup.list(options)`
  * **CLI**: `$ ezdb Backup --list <options>`
* Create Backup
  * **API**: `EZ.Backup.create(options)`
  * **CLI**: `$ ezdb Backup --create <options>`
* Describe Backup
  * **API**: `EZ.Backup.describe(options)`
  * **CLI**: `$ ezdb Backup --describe <options>`
* Delete Backup
  * **API**: `EZ.Backup.delete(options)`
  * **CLI**: `$ ezdb Backup --delete <options>`

### Tags
* List Tags
  * **API**: `EZ.Tag.list(options)`
  * **CLI**: `$ ezdb Tag --list <options>`
* Add Tag
  * **API**: `EZ.Tag.add(options)`
  * **CLI**: `$ ezdb Tag --add <options>`
* Remove Tag
  * **API**: `EZ.Tag.remove(options)`
  * **CLI**: `$ ezdb Tag --remove <options>`

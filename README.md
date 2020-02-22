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
    apiVersion: '2012-08-10',
    settings: {}
  }
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
* `accessKeyId` : AWS Access Key Id
* `secretKeyId` : AWS Secret Access Key
* `apiVersion` : API Version [Optional] [Default: 2012-08-10]
* `region` : AWS Region [Optional] [Default: us-east-1]
* `settings` : Settings [Object]:
  *

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
  secretAccessKey: 'xxx'
};
const EZ = new EZDB.Client(config);
```

### Tables
* List Tables
  * **API**: `EZ.Table.list(options)`
  * **CLI**: `$ ezdb Table --list <options>`
  * **Options**:
    *
* Create Table
  * **API**: `EZ.Table.create(options)`
  * **CLI**: `$ ezdb Table --create <options>`
  * **Options**:
    *
* Describe Table
  * **API**: `EZ.Table.describe(options)`
  * **CLI**: `$ ezdb Table --describe <options>`
  * **Options**:
    *
* Update Table
  * **API**: `EZ.Table.update(options)`
  * **CLI**: `$ ezdb Table --update <options>`
  * **Options**:
    *
* Delete Table
  * **API**: `EZ.Table.delete(options)`
  * **CLI**: `$ ezdb Table --delete <options>`
  * **Options**:
    *
* Query Table
  * **API**: `EZ.Table.query(options)`
  * **CLI**: `$ ezdb Table --query <options>`
  * **Options**:
    *
* Scan Table
  * **API**: `EZ.Table.scan(options)`
  * **CLI**: `$ ezdb Table --scan <options>`
  * **Options**:
    *
* Restore Table
  * **API**: `EZ.Table.restore(options)`
  * **CLI**: `$ ezdb Table --restore <options>`
  * **Options**:
    *
* Describe Table Time to Live
  * **API**: `EZ.Table.describeTTL(options)`
  * **CLI**: `$ ezdb Table --describeTTL <options>`
  * **Options**:
    *
* Update Table Time to Live
  * **API**: `EZ.Table.updateTTL(options)`
  * **CLI**: `$ ezdb Table --updateTTL <options>`
  * **Options**:
    *

### Items
* Get Item
  * **API**: `EZ.Item.get(options)`
  * **CLI**: `$ ezdb Item --get <options>`
  * **Options**:
    *
* Create Item
  * **API**: `EZ.Item.create(options)`
  * **CLI**: `$ ezdb Item --create <options>`
  * **Options**:
    *
* Update Item
  * **API**: `EZ.Item.update(options)`
  * **CLI**: `$ ezdb Item --update <options>`
  * **Options**:
    *
* Delete Item
  * **API**: `EZ.Item.delete(options)`
  * **CLI**: `$ ezdb Item --delete <options>`
  * **Options**:
    *

### Global Tables
* List Global Tables
  * **API**: `EZ.Global.list(options)`
  * **CLI**: `$ ezdb Global --list <options>`
  * **Options**:
    *
* Create Global Table
  * **API**: `EZ.Global.create(options)`
  * **CLI**: `$ ezdb Global --create <options>`
  * **Options**:
    *
* Describe Global Table
  * **API**: `EZ.Global.describe(options)`
  * **CLI**: `$ ezdb Global --describe <options>`
  * **Options**:
    *
* Update Global Table
  * **API**: `EZ.Global.update(options)`
  * **CLI**: `$ ezdb Global --update <options>`
  * **Options**:
    *
* Update Global Table Settings
  * **API**: `EZ.Global.settings(options)`
  * **CLI**: `$ ezdb Global --settings <options>`
  * **Options**:
    *

### Batchs
* Batch Get Items
  * **API**: `EZ.Batch.get(options)`
  * **CLI**: `$ ezdb Batch --get <options>`
  * **Options**:
    *
* Batch Write Items
  * **API**: `EZ.Batch.write(options)`
  * **CLI**: `$ ezdb Batch --write <options>`
  * **Options**:
    *

### Transactions
* Transact Get Items
  * **API**: `EZ.Transact.get(options)`
  * **CLI**: `$ ezdb Transact --get <options>`
  * **Options**:
    *
* Transact Write Items
  * **API**: `EZ.Transact.write(options)`
  * **CLI**: `$ ezdb Transact --write <options>`
  * **Options**:
    *

### Backups
* List Backups
  * **API**: `EZ.Backup.list(options)`
  * **CLI**: `$ ezdb Backup --list <options>`
  * **Options**:
    *
* Create Backup
  * **API**: `EZ.Backup.create(options)`
  * **CLI**: `$ ezdb Backup --create <options>`
  * **Options**:
    *
* Describe Backup
  * **API**: `EZ.Backup.describe(options)`
  * **CLI**: `$ ezdb Backup --describe <options>`
  * **Options**:
    *
* Delete Backup
  * **API**: `EZ.Backup.delete(options)`
  * **CLI**: `$ ezdb Backup --delete <options>`
  * **Options**:
    *

### Tags
* List Tags
  * **API**: `EZ.Tag.list(options)`
  * **CLI**: `$ ezdb Tag --list <options>`
  * **Options**:
    *
* Add Tag
  * **API**: `EZ.Tag.add(options)`
  * **CLI**: `$ ezdb Tag --add <options>`
  * **Options**:
    *
* Remove Tag
  * **API**: `EZ.Tag.remove(options)`
  * **CLI**: `$ ezdb Tag --remove <options>`
  * **Options**:
    *

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

## Usage
Initialize EZDB into Project and Configure AWS Profile
```js
const EZDB = require('ezdb');
const config = {
  accessKeyId: 'xxx',
  secretAccessKey: 'xxx',
  region: 'us-east-1', // Optional
  apiVersion: '2012-08-10', // Optional
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
  * **API**: `EZ.Table.list()`
  * **CLI**: `$ ezdb Table --list`
* Create Table
  * **API**: `EZ.Table.create()`
  * **CLI**: `$ ezdb Table --create`
* Describe Table
  * **API**: `EZ.Table.describe()`
  * **CLI**: `$ ezdb Table --describe`
* Update Table
  * **API**: `EZ.Table.update()`
  * **CLI**: `$ ezdb Table --update`
* Delete Table
  * **API**: `EZ.Table.delete()`
  * **CLI**: `$ ezdb Table --delete`
* Query Table
  * **API**: `EZ.Table.query()`
  * **CLI**: `$ ezdb Table --query`
* Scan Table
  * **API**: `EZ.Table.scan()`
  * **CLI**: `$ ezdb Table --scan`
* Restore Table
  * **API**: `EZ.Table.restore()`
  * **CLI**: `$ ezdb Table --restore`
* Describe Table Time to Live
  * **API**: `EZ.Table.describeTTL()`
  * **CLI**: `$ ezdb Table --describeTTL`
* Update Table Time to Live
  * **API**: `EZ.Table.updateTTL()`
  * **CLI**: `$ ezdb Table --updateTTL`

### Items
* Get Item
  * **API**: `EZ.Item.get()`
  * **CLI**: `$ ezdb Item --get`
* Create Item
  * **API**: `EZ.Item.create()`
  * **CLI**: `$ ezdb Item --create`
* Update Item
  * **API**: `EZ.Item.update()`
  * **CLI**: `$ ezdb Item --update`
* Delete Item
  * **API**: `EZ.Item.delete()`
  * **CLI**: `$ ezdb Item --delete`

### Global Tables
* List Global Tables
  * **API**: `EZ.Global.list()`
  * **CLI**: `$ ezdb Global --list`
* Create Global Table
  * **API**: `EZ.Global.create()`
  * **CLI**: `$ ezdb Global --create`
* Describe Global Table
  * **API**: `EZ.Global.describe()`
  * **CLI**: `$ ezdb Global --describe`
* Update Global Table
  * **API**: `EZ.Global.update()`
  * **CLI**: `$ ezdb Global --update`
* Update Global Table Settings
  * **API**: `EZ.Global.settings()`
  * **CLI**: `$ ezdb Global --settings`

### Batchs
* Batch Get Items
  * **API**: `EZ.Batch.get()`
  * **CLI**: `$ ezdb Batch --get`
* Batch Write Items
  * **API**: `EZ.Batch.write()`
  * **CLI**: `$ ezdb Batch --write`

### Transactions
* Transact Get Items
  * **API**: `EZ.Transact.get()`
  * **CLI**: `$ ezdb Transact --get`
* Transact Write Items
  * **API**: `EZ.Transact.write()`
  * **CLI**: `$ ezdb Transact --write`

### Backups
* List Backups
  * **API**: `EZ.Backup.list()`
  * **CLI**: `$ ezdb Backup --list`
* Create Backup
  * **API**: `EZ.Backup.create()`
  * **CLI**: `$ ezdb Backup --create`
* Describe Backup
  * **API**: `EZ.Backup.describe()`
  * **CLI**: `$ ezdb Backup --describe`
* Delete Backup
  * **API**: `EZ.Backup.delete()`
  * **CLI**: `$ ezdb Backup --delete`

### Tags
* List Tags
  * **API**: `EZ.Tag.list()`
  * **CLI**: `$ ezdb Tag --list`
* Add Tag
  * **API**: `EZ.Tag.add()`
  * **CLI**: `$ ezdb Tag --add`
* Remove Tag
  * **API**: `EZ.Tag.remove()`
  * **CLI**: `$ ezdb Tag --remove`

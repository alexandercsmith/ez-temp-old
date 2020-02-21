# EZDB

> EZ "Easy" DB

EZDB creates an easy to use and operate API and CLI for AWS DynamoDB management and transactions.

---


## Backup
List Backups
  * API: `EZ.Backup.list()`
  * CLI: `$ ezdb Backup --list <options>`

Create Backup
  * API: `EZ.Backup.create()`
  * CLI: `$ ezdb Backup --create <options>`

Describe Backup
  * API: `EZ.Backup.describe()`
  * CLI: `$ ezdb Backup --describe <options>`

Delete Backup
  * API: `EZ.Backup.delete()`
  * CLI: `$ ezdb Backup --delete <options>`


## Batch
Batch Get Item
  * API: `EZ.Batch.get()`
  * CLI: `$ ezdb Batch --get <options>`

Batch Write Item
  * API: `EZ.Batch.write()`
  * CLI: `$ ezdb Batch --write <options>`


## Global
List Global Tables
  * API: `EZ.Global.list()`
  * CLI: `$ ezdb Global --list <options>`

Create Global Table
  * API: `EZ.Global.create()`
  * CLI: `$ ezdb Global --create <options>`

Describe Global Table
  * API: `EZ.Global.describe()`
  * CLI: `$ ezdb Global --describe <options>`

Update Global Table
  * API: `EZ.Global.update()`
  * CLI: `$ ezdb Global --update <options>`


## Item
Get Item
  * API: `EZ.Item.get()`
  * CLI: `$ ezdb Item --get <options>`

Create Item
  * API: `EZ.Item.create()`
  * CLI: `$ ezdb Item --create <options>`

Update Item
  * API: `EZ.Item.update()`
  * CLI: `$ ezdb Item --update <options>`

Delete Item
  * API: `EZ.Item.delete()`
  * CLI: `$ ezdb Item --delete <options>`


## Table
List Tables
  * API: `EZ.Table.list()`
  * CLI: `$ ezdb Table --list <options>`

Create Table
  * API: `EZ.Table.create()`
  * CLI: `$ ezdb Table --create <options>`

Describe Table
  * API: `EZ.Table.describe()`
  * CLI: `$ ezdb Table --describe <options>`

Update Table
  * API: `EZ.Table.update()`
  * CLI: `$ ezdb Table --update <options>`

Delete Table
  * API: `EZ.Table.delete()`
  * CLI: `$ ezdb Table --delete <options>`

Query Table
  * API: `EZ.Table.query()`
  * CLI: `$ ezdb Table --query <options>`

Restore Table
  * API: `EZ.Table.restore()`
  * CLI: `$ ezdb Table --restore <options>`

Scan Table
  * API: `EZ.Table.scan()`
  * CLI: `$ ezdb Table --scan <options>`



## Tag
List Tags associated with Resource
  * API: `EZ.Tag.list()`
  * CLI: `$ ezdb Tag --list <options>`

Tag Resource
  * API: `EZ.Tag.add()`
  * CLI: `$ ezdb Tag --tag <options>`

Untag Resource
  * API: `EZ.Tag.remove()`
  * CLI: `$ ezdb Tag --untag <options>`



## Transact
Transact Get Item
  * API: `EZ.Transact.get()`
  * CLI: `$ ezdb Transact --get <options>`

Transact Write Item
  * API: `EZ.Transact.write()`
  * CLI: `$ ezdb Transact --write <options>`

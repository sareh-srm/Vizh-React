/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qlb4y2yodvfd2mm")

  // remove
  collection.schema.removeField("fqpsss9g")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "shafp9rr",
    "name": "current_bid",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 9999,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qlb4y2yodvfd2mm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fqpsss9g",
    "name": "current_bid",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("shafp9rr")

  return dao.saveCollection(collection)
})

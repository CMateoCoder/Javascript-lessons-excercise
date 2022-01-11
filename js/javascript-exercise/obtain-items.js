const { get } = require("lodash")

let items = [
    {
        "ok": "ok",
        "labels": [

          {
            "owner": {
              "type": null,
              "id": null,
              "conditions": {
                "transportMode": "air",
                "wayBillNumber": "729-6760-3012",
                "billOfLadingNumber": null,
                "houseShipment": {
                  "wayBillNumber": "CMU-0016-1407"
                },
                "product": {
                  "name": "Fresh Cut Flowers"
                },
                "package": {
                  "type": "Q"
                },
                "dateTimes": {
                  "shipping": "2021-07-13"
                },
                "dimensions": {
                  "unit": "in",
                  "height": "4.72",
                  "width": "10.24",
                  "length": "41.34"
                }
              },
              "quantity": 11
            },
            "inventoryItems": [
              {
                "lotNumber": null,
              "identifier": null,
                "supplierLotNumber": null,
                "supplierIdentifier": "ND272A2",
                "supplierMark": null,
                "quantity": 1,
                "description": "GYPSOPHILA CB 10 ST/BU WHITE 54 CM"
              },
              {
                "lotNumber": null,
                "identifier": null,
                "supplierLotNumber": null,
                "supplierIdentifier": "ND272A3",
                "supplierMark": null,
                "quantity": 1,
                "description": "GYPSOPHILA CB 10 ST/BU WHITE 54 CM"
              },
              {
                "lotNumber": null,
                "identifier": null,
                "supplierLotNumber": null,
                "supplierIdentifier": "ND272A4",
                "supplierMark": null,
                "quantity": 1,
                "description": "GYPSOPHILA CB 10 ST/BU WHITE 54 CM"
              },
              {
                "lotNumber": null,
                "identifier": null,
                "supplierLotNumber": null,
                "supplierIdentifier": "ND272A5",
                "supplierMark": null,
                "quantity": 1,
                "description": "GYPSOPHILA CB 10 ST/BU WHITE 54 CM"
              },
              {
                "lotNumber": null,
                "identifier": null,
                "supplierLotNumber": null,
                "supplierIdentifier": "ND272A6",
                "supplierMark": null,
                "quantity": 1,
                "description": "GYPSOPHILA CB 10 ST/BU WHITE 54 CM"
              },
              {
                "lotNumber": null,
                "identifier": null,
                "supplierLotNumber": null,
                "supplierIdentifier": "ND272A7",
                "supplierMark": null,
                "quantity": 1,
                "description": "GYPSOPHILA CB 10 ST/BU WHITE 54 CM"
              },
              {
                "lotNumber": null,
                "identifier": null,
                "supplierLotNumber": null,
                "supplierIdentifier": "ND272A8",
                "supplierMark": null,
                "quantity": 1,
                "description": "GYPSOPHILA MIRABELLA BOUQUET WHITE 60 CM"
              },
              {
                "lotNumber": null,
                "identifier": null,
                "supplierLotNumber": null,
                "supplierIdentifier": "ND272A9",
                "supplierMark": null,
                "quantity": 1,
                "description": "GYPSOPHILA MIRABELLA BOUQUET WHITE 60 CM"
              },
              {
                "lotNumber": null,
                "identifier": null,
                "supplierLotNumber": null,
                "supplierIdentifier": "ND272AA",
                "supplierMark": null,
                "quantity": 1,
                "description": "GYPSOPHILA MIRABELLA BOUQUET WHITE 60 CM"
              },
              {
                "lotNumber": null,
                "identifier": null,
                "supplierLotNumber": null,
                "supplierIdentifier": "ND272AB",
                "supplierMark": null,
                "quantity": 1,
                "description": "GYPSOPHILA MIRABELLA BOUQUET WHITE 60 CM"
              },
              {
                "lotNumber": null,
                "identifier": null,
                "supplierLotNumber": null,
                "supplierIdentifier": "ND272AC",
                "supplierMark": null,
                "quantity": 1,
                "description": "GYPSOPHILA MIRABELLA BOUQUET WHITE 60 CM"
              }
            ]
          },
          {
            "owner": {
              "type": null,
              "id": null,
              "conditions": {
                "transportMode": "air",
                "wayBillNumber": "729-6760-3012",
                "billOfLadingNumber": null,
                "houseShipment": {
                  "wayBillNumber": "CMU-0016-1407"
                },
                "product": {
                  "name": "Fresh Cut Flowers"
                },
                "package": {
                  "type": "Q"
                },
                "dateTimes": {
                  "shipping": "2021-07-13"
                },
                "dimensions": {
                  "unit": "in",
                  "height": "4.72",
                  "width": "10.24",
                  "length": "41"
                }
              },
              "quantity": 7
            },
            "inventoryItems": [
              {
                "lotNumber": null,
                "identifier": null,
                "supplierLotNumber": null,
                "supplierIdentifier": "ND272AD",
                "supplierMark": null,
                "quantity": 1,
                "description": "GYPSOPHILA MIRABELLA BOUQUET WHITE 60 CM"
              },
              {
                "lotNumber": null,
                "identifier": null,
                "supplierLotNumber": null,
                "supplierIdentifier": "ND272AE",
                "supplierMark": null,
                "quantity": 1,
                "description": "GYPSOPHILA MIRABELLA BOUQUET WHITE 60 CM"
              },
              {
                "lotNumber": null,
                "identifier": null,
                "supplierLotNumber": null,
                "supplierIdentifier": "ND272AF",
                "supplierMark": null,
                "quantity": 1,
                "description": "GYPSOPHILA MIRABELLA BOUQUET WHITE 60 CM"
              },
              {
                "lotNumber": null,
                "identifier": null,
                "supplierLotNumber": null,
                "supplierIdentifier": "ND272B0",
                "supplierMark": null,
                "quantity": 1,
                "description": "GYPSOPHILA MIRABELLA BOUQUET WHITE 60 CM"
              },
              {
                "lotNumber": null,
                "identifier": null,
                "supplierLotNumber": null,
                "supplierIdentifier": "ND272B1",
                "supplierMark": null,
                "quantity": 1,
                "description": "GYPSOPHILA MIRABELLA BOUQUET WHITE 60 CM"
              },
              {
                "lotNumber": null,
                "identifier": null,
                "supplierLotNumber": null,
                "supplierIdentifier": "ND272B2",
                "supplierMark": null,
                "quantity": 1,
                "description": "GYPSOPHILA MIRABELLA BOUQUET WHITE 60 CM"
              },
              {
                "lotNumber": null,
                "identifier": null,
                "supplierLotNumber": null,
                "supplierIdentifier": "ND272B3",
                "supplierMark": null,
                "quantity": 1,
                "description": "GYPSOPHILA MIRABELLA BOUQUET WHITE 60 CM"
              }
            ]
          }
        ],
        "dbItems": [
          {
            "shipmentItemId": "40314c32-e5c6-11eb-9968-d90441e34080",
            "houseShipmentId": "3ff18412-e5c6-11eb-9968-d90441e34080",
            "shipmentId": "fb6d0000-e56e-11eb-a1b1-adaa961f20e4",
            "houseWaybillNumber": "CMU-0016-1407",
            "shipmentWaybillNumber": "729-6760-3012",
            "shipmentDate": "2021-07-13T05:00:00.000Z",
            "billOfLadingNumber": null,
            "packageReference": "Q",
            "productName": "FRESH CUT FLOWERS",
            "quantity": "18.000000"
          }
        ]
    }
]

const forAni = () => {

    for(let i of items) {
      for(j of i.labels){
        for(x of j.inventoryItems){
            console.log(x)
        }
      }
    }

    // return obtainedObj
}
forAni()

let members = [{id: 1, member: [1,2]}, {id: 2, member: [3,4]}]
const howManyMembers = members.reduce( (acc, curr) => [...acc, ...curr.member] ,[])
    
const getItems =  items
                  .reduce( (acc, curr) => [...acc, ...curr.labels], [])
                  .reduce( (acc, curr) => [...acc, ...curr.inventoryItems] ,[] )

console.log(getItems)
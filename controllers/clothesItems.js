module.exports = {
  index:  clothesItemsIndex,
  create: clothesItemsCreate,
  show:   clothesItemsShow,
  update: clothesItemsUpdate,
  delete: clothesItemsDelete
};

const ClothesItem = require("../models/clothesItem");

function clothesItemsIndex(req, res) {
  ClothesItem.find((err, clothesItems) => {
    if (err) return res.status(500).json({ message: "Something went wrong" });
    return res.status(200).json(clothesItems);
  });
}

function clothesItemsCreate(req, res) {
  
}

function clothesItemsShow(req, res) {

}

function clothesItemsUpdate(req, res) {

}

function clothesItemsDelete(req, res) {

}

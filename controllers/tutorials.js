const e = require("express");
const express = require("express");
const res = require("express/lib/response");
// const router = express.Router();

let dataId = 4;
let defaultData = [
  { id: 1, title: "React Hooks Basic", description: "Tut# 1" },
  { id: 2, title: "Redux Basic", description: "Tut# 2" },
  { id: 3, title: "Redux Hooks Basic", description: "Tut# 3" },
  { id: 4, title: "React CRUD", description: "Tut# 4" },
];

const getAll = async (req, res) => {
  try {
    return res.status(200).send(defaultData);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const get = async (req, res) => {
  let id = req.params.id;

  try {
    return res.status(200).send(defaultData.filter((item) => id == item.id)[0]);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const create = async (req, res) => {
  const data = req.body;
  try {
    dataId += 1;
    let newData = {
      id: dataId,
      title: data.title,
      description: data.description,
    };
    defaultData = [...defaultData, newData]
    return res.status(200).send(newData);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
const update = async (req, res) => {
  const data = req.body
  const id = req.params.id
  try {
    const { title, description } = data;
    const dataCopy = defaultData;
    const element = dataCopy.filter((value) => id == value.id)[0];
    element.title = title;
    element.description = description;
    // defaultData = dataCopy;
    return res.status(200).send(dataCopy);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const remove = async (req, res) => {
  const id = req.params.id
  try {
    defaultData = defaultData.filter((value) => id != value.id)
    return res.status(200).send(defaultData);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const removeAll = async (req, res) => {
  try {
    defaultData = []
    return res.status(200).send(defaultData);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports.getAll = getAll;
module.exports.get = get;
module.exports.create = create;
module.exports.update = update;
module.exports.remove = remove;
module.exports.removeAll = removeAll;

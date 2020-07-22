const db = require('../models/QuestionModel');

const Index = async (_, res) => {
  try {
    const data = await db.find().sort({ numeroQuestao: 1 });
    res.send(data);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const Create = async (req, res) => {
  const data = req.body;
  try {
    const response = await db.create(data);
    res.json({ id: response._id });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const Update = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const updatedData = await db.findByIdAndUpdate(id, data, {
      useFindAndModify: false,
      new: true,
    });
    res.json(updatedData);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const Delete = async (req, res) => {
  const id = req.params.id;
  try {
    db.findByIdAndDelete(id);
    res.send();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { Create, Index, Update, Delete };

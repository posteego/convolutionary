const db = require('../models');

// define methods
module.exports = {
  findAll: function (req, res) {
    db.Pair.find(req.query)
      .then(dbPair => res.json(dbPair))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Pair.findById(req.params.id)
      .then(dbPair => res.json(dbPair))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Pair.create(req.body)
      .then(dbPair => res.json(dbPair))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Pair.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbPair => res.json(dbPair))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Pair.findById(req.params.id)
      .then(dbPair => dbPair.remove())
      .then(dbPair => res.json(dbPair))
      .catch(err => res.status(422).json(err));
  }
};
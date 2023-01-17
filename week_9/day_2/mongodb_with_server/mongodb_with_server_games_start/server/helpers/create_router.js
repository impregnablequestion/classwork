const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {

  const router = express.Router();

  // handle index route

  router.get('/', function(req, res){
    collection
      .find()
      .toArray()
      .then(games => res.json(games))
      .catch(error => {
        console.error(error);
        res.status(500);
      });
  });

  // handle show individual game

  router.get('/:id', function(req, res){
    const id = ObjectID(req.params.id);
    collection
      .findOne({_id: id})
      .then(game => res.json(game))
      .catch(error => {
        console.error(error);
        res.status(500);
      });
  })

  // handle add game

  router.post('/', function(req, res){
    const newGameData = req.body;

    collection
      .insertOne(newGameData)
      .then(result => {
        res.json(result.ops[0])
      })
      .catch(error => {
        console.error(error);
        res.status(500);
      });
  });

  router.delete('/:id', function(req, res){
    const id = ObjectID(req.params.id);

    collection
      .deleteOne({_id: id})
      .then(result => res.json(result))
      .catch(error => {
        console.error(error);
        res.status(500);
      });
  });

  router.put('/:id', function(req, res){
    const id = ObjectID(req.params.id);
    const updatedGame = req.body;

    collection.updateOne(
      {_id: id},
      { $set: updatedGame}
    )
    .then(result => res.json(result))
    .catch(error => {
      console.error(error);
      res.status(500);
    });
  });

  return router;

};

module.exports = createRouter;

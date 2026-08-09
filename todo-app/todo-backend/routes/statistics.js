const express = require('express');
const router = express.Router();
const redis = require('../redis')

router.get('/', async (req, res) => {
  const count = await redis.get('added_todos')
  res.send({
    added_todos: count ? Number(count) : 0
  });
});

module.exports = router;
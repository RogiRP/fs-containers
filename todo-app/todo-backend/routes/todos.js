const express = require('express');
const { Todo } = require('../mongo')
const redis = require('../redis')
const router = express.Router();

router.get('/', async (_, res) => {
  const todos = await Todo.find({})
  res.send(todos);
});

router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false
  })
  const currentCount = await redis.get('added_todos')
  const newCount = currentCount ? Number(currentCount) + 1 : 1
  await redis.set('added_todos', newCount)
  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params
  req.todo = await Todo.findById(id)
  if (!req.todo) return res.sendStatus(404)
  next()
}

singleRouter.delete('/', async (req, res) => {
  await req.todo.delete()
  res.sendStatus(200);
});

singleRouter.get('/', async (req, res) => {
  res.send(req.todo);
});

singleRouter.put('/', async (req, res) => {
  req.todo.text = req.body.text
  req.todo.done = req.body.done
  await req.todo.save()
  res.send(req.todo);
});

router.use('/:id', findByIdMiddleware, singleRouter)

module.exports = router;
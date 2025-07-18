import express from 'express'
import cors from 'cors'
import db from './db.js'
import { nanoid } from 'nanoid'
import path from 'path'

const app = express()

app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:5174'] }))
app.use(express.json())

// http://localhost:3000/api/todos?order=asc&done=true
app.get('/api/todos', function (req, res) {
  db.read()
  const order = req.query.order || 'asc' // asc, desc
  const done = req.query.done

  let todos = [].concat(db.data.todos)
  if (done === 'true') {
    todos = todos.filter(function (todo) {
      return todo.done
    })
  } else if (done === 'false') {
    todos = todos.filter(function (todo) {
      return !todo.done
    })
  }

  if (order === 'asc') {
    res.json(todos)
  } else if (order === 'desc') {
    res.json(todos.reverse())
  }
})

app.post('/api/todos', function (req, res) {
  db.read()
  const newTodo = {
    id: nanoid(),
    text: req.body.text,
    done: req.body.done
  }
  db.data.todos.push(newTodo)
  db.write()
  res.json(newTodo)
})

app.put('/api/todos/:todoId', function (req, res) {
  db.read()
  const todoId = req.params.todoId
  const todo = db.data.todos.find(function (todo) {
    return todo.id === todoId
  })
  todo.text = req.body.text
  todo.done = req.body.done
  db.write()
  res.json(todo)
})

app.delete('/api/todos/:todoId', function (req, res) {
  db.read()
  const todoId = req.params.todoId
  const index = db.data.todos.findIndex(function (todo) {
    return todo.id === todoId
  })
  db.data.todos.splice(index, 1) // (아이템인덱스, 삭제할아이템개수)
  db.write()
  res.json('done')
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(process.cwd(), '../client/dist')))
  app.get('/*path', function (req, res) {
    res.sendFile(path.join(process.cwd(), '../client/dist/index.html'))
  })
}

app.listen(3000, function () {
  console.log('server is running | port: 3000')
})

// cd ..
// npm run build

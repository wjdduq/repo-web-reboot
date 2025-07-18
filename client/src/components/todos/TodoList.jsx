import { useEffect } from 'react'
import { useTodoStore } from '@/stores/todo'
import TodoItem from '@/components/todos/TodoItem'
export default function TodoList() {
  const fetchTodos = useTodoStore(s => s.fetchTodos)
  const todos = useTodoStore(function (state) {
    return state.todos
  })

  useEffect(function () {
    fetchTodos()
  }, [])

  return (
    <>
      <ul>
        {todos.map(function (todo) {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}></TodoItem>
          )
        })}
      </ul>
    </>
  )
}

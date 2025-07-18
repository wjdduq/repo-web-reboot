import TodoCreator from '@/components/todos/TodoCreator'
import TodoFilters from '@/components/todos/TodoFilters'
import TodoList from '@/components/todos/TodoList'
export default function Todos() {
  return (
    <>
      <TodoCreator></TodoCreator>
      <TodoFilters></TodoFilters>
      <TodoList></TodoList>
    </>
  )
}

import { useTodoStore } from '@/stores/todo'
export default function TodoFilters() {
  const ascending = useTodoStore(s => s.ascending)
  const descending = useTodoStore(s => s.descending)
  const setDone = useTodoStore(s => s.setDone)
  return (
    <>
      <div>
        <button onClick={ascending}>ascending</button>
        <button onClick={descending}>descending</button>
        <button
          onClick={function () {
            setDone(undefined)
          }}>
          all
        </button>
        <button
          onClick={function () {
            setDone(true)
          }}>
          done
        </button>
        <button
          onClick={function () {
            setDone(false)
          }}>
          todo
        </button>
      </div>
    </>
  )
}

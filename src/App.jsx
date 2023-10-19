import { useReducer, useState } from 'react'
import { Todo } from './components/Todo'
import { ACTIONS } from './lib/constants'
import { reducer } from './lib/todo-reducer'

export default function App() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    dispatch({ type: ACTIONS.ADD_TODO, payload: { name } })
    setName('')
  }

  return (
    <>
      <h1>Todos</h1>
      <form onSubmit={handleSubmit}>
        <legend>Add new Todo</legend>
        <fieldset>
          <input
            type='text'
            placeholder='Your todo...'
            value={name}
            onChange={event => setName(event.target.value)}
          />
          <button>Add</button>
        </fieldset>
      </form>
      <section className='todo-container'>
        {todos.length
          ? todos.map(todo => (
              <Todo
                key={todo.id}
                todo={todo}
                dispatch={dispatch}
              />
            ))
          : 'No todos!'}
      </section>
    </>
  )
}

import { ACTIONS } from './constants'
import { newTodo } from './utils'

export function reducer(todos, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_TODO:
      if (!payload.name) return todos

      return [...todos, newTodo(payload.name)]

    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === payload.id) {
          return { ...todo, complete: !todo.complete }
        }

        return todo
      })

    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== payload.id)

    default:
      return todos
  }
}

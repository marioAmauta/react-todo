import PropTypes from 'prop-types'
import { ACTIONS } from '../lib/constants'

export function Todo({ todo, dispatch }) {
  return (
    <div className='todo'>
      <span
        style={{
          color: todo.complete ? '#AAA' : '#000',
          textDecoration: todo.complete ? 'line-through' : ''
        }}
      >
        {todo.name}
      </span>
      <div>
        <button
          onClick={() =>
            dispatch({
              type: ACTIONS.TOGGLE_TODO,
              payload: { id: todo.id }
            })
          }
        >
          Toggle
        </button>
        <button
          onClick={() =>
            dispatch({
              type: ACTIONS.DELETE_TODO,
              payload: { id: todo.id }
            })
          }
        >
          Delete
        </button>
      </div>
    </div>
  )
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired
  }).isRequired,
  dispatch: PropTypes.func.isRequired
}

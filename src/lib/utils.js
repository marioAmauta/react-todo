export function newTodo(name) {
  return {
    id: Date.now(),
    name,
    complete: false
  }
}

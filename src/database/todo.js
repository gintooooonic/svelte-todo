import { get, put, STORE_TODO } from "./database"

function getTodoAll() {
  return get(STORE_TODO)
}

function getTodo(id) {
  return get(STORE_TODO, id)
}

function putTodo(item) {
  put(STORE_TODO, item)
}

export { getTodoAll, getTodo, putTodo }

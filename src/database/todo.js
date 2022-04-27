import { connectDB, get, put, STORE_TODO } from "./database"

async function getTodoAll() {
  const db = await connectDB()
  return get(db, STORE_TODO)
}

async function getTodo(id) {
  const db = await connectDB()
  return get(db, STORE_TODO, id)
}

async function putTodo(item) {
  const db = await connectDB()
  return put(db, STORE_TODO, item)
}

export { getTodoAll, getTodo, putTodo }

const STORE_TODO = "todo"
const conn = indexedDB.open("todo", 1)
let database = null

conn.onupgradeneeded = function () {
  const db = conn.result
  if (!db.objectStoreNames.contains(STORE_TODO)) {
    db.createObjectStore(STORE_TODO, { keyPath: "id", autoIncrement: true })
  }
}

conn.onsuccess = function () {
  database = conn.result
}

conn.onerror = function () {
  /* Handle the error */
}

function get(storeName, id = null) {
  return new Promise((resolve, reject) => {
    if (!database) {
      reject(new Error("Database is not loaded"))
    }
    const transaction = database.transaction(storeName)
    const store = transaction.objectStore(storeName)
    const request = id ? store.get(id) : store.getAll()
    request.onerror = () => reject(request.error)
    request.onsuccess = () => resolve(request.result)
  })
}

function put(storeName, item) {
  if (!database) {
    throw new Error("Database is not loaded")
  }
  const transaction = database.transaction(storeName, "readwrite")
  const store = transaction.objectStore(storeName)
  store.add(item)
}

export { get, put, STORE_TODO }

const STORE_TODO = "todo"

function connectDB() {
  return new Promise((resolve, reject) => {
    const conn = indexedDB.open("todo_app", 1)

    conn.onupgradeneeded = function () {
      const db = conn.result
      if (!db.objectStoreNames.contains(STORE_TODO)) {
        db.createObjectStore(STORE_TODO, { keyPath: "id", autoIncrement: true })
      }
    }

    conn.onsuccess = function () {
      const db = conn.result
      resolve(db)
    }

    conn.onerror = function () {
      /* Handle the error */
    }
  })
}

function get(database, storeName, id = null) {
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(storeName)
    const store = transaction.objectStore(storeName)
    const request = id ? store.get(id) : store.getAll()
    request.onerror = () => reject(request.error)
    request.onsuccess = () => resolve(request.result)
  })
}

function put(database, storeName, item) {
  const transaction = database.transaction(storeName, "readwrite")
  const store = transaction.objectStore(storeName)
  store.add(item)
}

export { connectDB, get, put, STORE_TODO }

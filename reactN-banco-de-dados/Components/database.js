import Dexie from 'dexie'

const db = new Dexie('bancoAula')
db.version(1).stores({
    users: '++id, name, age'
})

export default db
import Dexie from 'dexie'

const db = new Dexie('BancoTarefas')

db.version(1).stores({
    tarefas: '++id, task, completed'
})

export default db
import { fillNotes } from './controllers/note'

const notes = []
notes.push({
  id: 1,
  title: 'Prueba',
  description: 'blablalba',
  creationDate: new Date()
})
notes.push({
  id: 2,
  title: 'Prueba 2',
  description: 'blablalba',
  creationDate: new Date()
})

localStorage.setItem('notes', JSON.stringify(notes))

fillNotes()
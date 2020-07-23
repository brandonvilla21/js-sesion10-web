// Escribir una funcion qe devuelva las notas guardadas en local storage
export function getNotes() {
 const notes = localStorage.getItem('notes');
  if (notes) {
    return JSON.parse(notes);   
  }
 return []
}

export function saveNote(description, title) {
  // obtener el arreglo de notes acual
  const notes = getNotes();
  // construir objeto con title y description, id, creationDate
  const newNote = {
    id: notes.length + 1,
    title,
    description,
    creationDate: new Date()
  }
  // agregar el objeo al arreglo
  notes.push(newNote)
  // arreglo a local storage
  localStorage.setItem('notes', JSON.stringify(notes))
}
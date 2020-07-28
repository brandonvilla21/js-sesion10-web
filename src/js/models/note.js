// Escribir una funcion que devuelva las notas guardadas en local storage
// export function getNotes() {
//  const notes = localStorage.getItem('notes');
//   if (notes) {
//     return JSON.parse(notes);   
//   }
//  return []
// }
export async function getNotes() {
  const result = await fetch('http://localhost:3000/notes')
  const data = await result.json()
  return data
}

export async function saveNote(description, title) {
  const newNote = {
    title,
    description,
  }

  await fetch('http://localhost:3000/notes', {
    body: JSON.stringify(newNote),
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    }
  })
}

// guardar titulo y descripcion en el arreglo de notes
// crear un objeto con la info de la nueva nota
// obtener el arreglo actual de notes
// push al arreglo para almacenar el nuevo objecto 
// guardar arreglo notes en localStorage
// export function saveNote(description, title) {
//   // obtener el arreglo de notes acual
//   const notes = getNotes();
//   // construir objeto con title y description, id, creationDate
//   const newNote = {
//     id: notes.length + 1,
//     title,
//     description,
//     creationDate: new Date()
//   }
//   // agregar el objeo al arreglo
//   notes.push(newNote)
//   // arreglo a local storage
//   localStorage.setItem('notes', JSON.stringify(notes))
// }


export function deleteAll() {
  localStorage.clear()
}
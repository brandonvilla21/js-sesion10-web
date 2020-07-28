import { generateTemplate } from '../views/note'
import { getNotes, saveNote, deleteAll } from '../models/note'

export async function fillNotes() {
  const noteContainerElement = document.getElementById('notas-container')
  
  // 1. Obtener la informacion
  const notes = await getNotes()
  // 2. Generar el template con la informacion obtenida
  // Arreglo de strings con los templates 
  // notes: [{...}, {..}, {...}]
  const noteStringElements = notes.map((note) => {
    const template = generateTemplate(note.title, note.description, note.creationDate)
    
    return template
  })
  // noteStringElements: = ['<div>...</div>', '<div>...</div>', '<div>...</div>'].join()
  // "<div>...</div>
  // <div>...</div>
  // <div>...</div>"
  // console.log(noteStringElements)
  noteContainerElement.innerHTML = noteStringElements.join('\n')
}

export function submitNote() {
  const formElement = document.getElementById('notes-form')

  // Crear el evento submit
  formElement.addEventListener('submit', async (event) => {
    // Obtener el titulo por medio del ID en la etiqueta HTML correspondiente
    // Obtener la descripcion por medio del ID en la etiqueta HTML correspondiente
    // Enviarlo al localStorage (agregar la nueva informacion al arreglo (notes) actual)
    event.preventDefault()
    const titleElement = document.getElementById('note-title')
    const descriptionElement = document.getElementById('note-description')
    await saveNote(descriptionElement.value, titleElement.value); 
    fillNotes()
  })

}

export function removeNotes() {
  const removeButtonElement = document.getElementById('clear-button')
  removeButtonElement.addEventListener('click', () => {
    deleteAll() // localStorage.clear()
    fillNotes()
  })
}
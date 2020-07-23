import { generateTemplate } from '../views/note'
import { getNotes } from '../models/note'

export function fillNotes() {
  const noteContainerElement = document.getElementById('notas-container')
  
  // 1. Obtener la informacion
  const notes = getNotes()
  // 2. Generar el template con la informacion obtenida
  // Arreglo de strings con los templates 
  const noteStringElements = notes.map((note) => {
    const template = generateTemplate(note.title, note.description, note.creationDate)
    
    return template
  })

  console.log(noteStringElements)
  noteContainerElement.innerHTML = noteStringElements.join('\n')
}
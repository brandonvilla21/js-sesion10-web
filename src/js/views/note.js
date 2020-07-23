// Crear una funcion que retorne el template de arriba concatenando la informacion de las variables
// Esta funcion recibira por parametros el titulo, descripcion y fecha de creacion (creationDate)

export function generateTemplate(titulo, description, creationDate) {
  return `
    <div class="col-lg-4 col-md-6 col-sm-12">
      <div class="card my-2">
        <div class="card-header">
          <div class="d-flex justify-content-between align-items-center">
            <strong>${titulo}</strong>
          </div>
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p style="min-height: 120px;">${description}</p>
            <footer class="blockquote-footer">Creado: <cite title="Source Title">${creationDate}</cite></footer>
          </blockquote>
        </div>
      </div>
    </div>
  `;
}

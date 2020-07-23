const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') // Importando libreria

module.exports = {
  entry: './src/js/index.js',  // Nuestro punto de entrada en el proyecto
  output: {
    filename: 'main.js', // Archivo que webpack va a generar
    path: path.resolve(__dirname, 'dist') // Especifica la ruta donde va a generar el archivo
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html') // Especifica la ruta donde podra encontrar nuestro HTML
    })
  ]
}
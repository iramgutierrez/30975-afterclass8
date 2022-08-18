const express = require('express')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  return res.json({
    status: 'Ok'
  })
})

const PORT = process.env.PORT || 8080

const server = app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))

server.on('error', error => console.log(error))
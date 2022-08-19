const express = require('express')

const app = express()
app.use(express.json())


const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
  return res.json({
    status: 'Ok',
    port: PORT
  })
})

const server = app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))

server.on('error', error => console.log(error))
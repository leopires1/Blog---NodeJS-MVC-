const express = require('express')
const path = require('node:path')
const router = require('./routes')

const app = express()

//configurações do ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//configuração para arquivos estáticos
app.use(express.static('public'))

//configuração para ler dados da request
app.use(express.urlencoded({ extended: true }))

//rotas da aplicação
app.use(router)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor rodando na url: http://localhost:${PORT}/`))
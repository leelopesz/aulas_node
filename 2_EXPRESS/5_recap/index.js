const express = require("express")

const app = express()

app.get('/', (requisicao, resposta) => {
    resposta.send("Seja bem-vindo(a) ao meu servidor!")
})

app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001")
})



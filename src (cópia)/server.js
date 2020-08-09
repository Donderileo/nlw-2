
const{pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages')

const express = require('express')
const server = express()

//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})




server
//req.body
.use(express.urlencoded({ extended:true}))
//Configuração de arquivos estáticos
.use(express.static("public"))
//rotas da aplicação
.get("/",pageLanding)
.get("/study",pageStudy)
.get("/give-classes",pageGiveClasses )
.post("/save-classes",saveClasses)
.listen(3000)

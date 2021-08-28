const express = require("express")
var cors = require('cors')



const app = express()
app.use(cors())
app.use(express.json())

app.use('/', require('./route/postsRoute'))

app.listen(5000)
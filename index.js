const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()
app.use(cors())
app.use(bodyParser.json())

const database = require("./database")

const createUser = (request, response) => {
  database("user").select()
    .then(users => {
      response.json({
        user: users
      })
    })
}

app.post("/users", createUser)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Listening on... ${PORT}`))

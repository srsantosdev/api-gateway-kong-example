import 'dotenv/config'
import http from 'http'

const PORT = process.env.PORT

const server = http.createServer((request, response) => {
  response.end(process.env.CONTENT)
})

server.listen(PORT)
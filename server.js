import Nullstack from 'nullstack'

import express from 'express'

import Application from './src/Application'
import ExposedServerFunctions from './src/ExposedServerFunctions'

const context = Nullstack.start(Application)
context.server.use(express.json())
context.server.get('/test-get', ExposedServerFunctions.fetchData)
context.server.post('/test-post', ExposedServerFunctions.fetchData)
context.server.put('/test-put', ExposedServerFunctions.fetchData)

context.server.post('/hacky', async (request, response) => {
  const data = await ExposedServerFunctions.fetchData({ request })
  response.json(data)
})

context.server.post('/works', (request, response) => {
  response.json(request.body)
})

context.start = async function start() {
  // https://nullstack.app/application-startup
}

export default context

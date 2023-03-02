import Nullstack from 'nullstack'

class ExposedServerFunctions extends Nullstack {

  static async fetchData({ request }) {
    console.log(`👀 Yeah! Im here! url: ${request.url}`)
    console.log('request.body', request.body)
    return {
      status: "🐴 xurupita's farm 🐴",
      body: request.body,
    }
  }

}

export default ExposedServerFunctions

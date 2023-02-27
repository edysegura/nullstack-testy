import Nullstack from 'nullstack'

class ExposedServerFunctions extends Nullstack {

  static async fetchData({ request }) {
    console.log(`👀 Yeah! Im here! url: ${request.url}`)
    return {
      status: "🐴 xurupita's farm 🐴",
    }
  }

}

export default ExposedServerFunctions

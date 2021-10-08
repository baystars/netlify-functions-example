exports.handler = async (event, context) => {
  console.log('event', event)
  console.log('context', context)

  const name = event.queryStringParameters.name || "World"
  return {
    statusCode: 200,
    body: `Hello, ${name}`
  }
}

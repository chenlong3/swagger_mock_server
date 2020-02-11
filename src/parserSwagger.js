const swaggerParserMock = require('swagger-parser-mock');

swaggerParserMock('https://petstore.swagger.io/v2/swagger.json').then(({paths}) => {
  console.log(paths)
})
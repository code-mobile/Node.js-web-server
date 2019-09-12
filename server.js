
 
let Parser = require('rss-parser');
let parser = new Parser();
const http = require('http')
const port = 3000


const requestHandler = async (request, response) => {
let feed = await parser.parseURL('https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en');
response.end(`${JSON.stringify(feed.items.map(item => item.title))}`)
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
if (err) {
return console.log('something bad happened', err)
}

console.log(`server is listening on ${port}`)
})





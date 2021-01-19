import fetch from 'node-fetch';
import * as Fastify from 'fastify';

const server = Fastify.fastify({ logger: true });

server.post('/', {}, async (request, reply) => {
    const response = await fetch('https://graphql.contentful.com/content/v1/spaces/ge2h41wcr1qd', {
        method: 'post',
        body: JSON.stringify(request.body),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer DXgCHvMuSZokRWL6Ht6UVkBfA7HSkHDE1OPaVB5qd8g'
        }
    });
    reply.send(await response.json())
    return
})

server.listen(3000, function (err, address) {
    if (err) {
        server.log.error(err)
        process.exit(1)
    }
    server.log.info(`server listening on ${address}`)
})
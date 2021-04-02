import server from '../services/graphql/search-service'

export const handler = server.createHandler({
  cors: { origin: '*' },
})

import { gql, makeExecutableSchema } from 'apollo-server-lambda'

import deepmerge from 'deepmerge'

const globalTypeDefs = gql`
  type Query
  type Mutation
`

export const makeExecutableFromModules = ({ modules }): any => {
  let typeDefs = [globalTypeDefs]

  let resolvers = {}

  modules.forEach((module) => {
    typeDefs = [...typeDefs, ...module.typeDefs]

    resolvers = deepmerge(resolvers, module.resolvers)
  })
  let schema = makeExecutableSchema({
    typeDefs,
    resolvers,
    schemaDirectives: {},
  })

  return schema
}
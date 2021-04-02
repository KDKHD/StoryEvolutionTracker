import ApolloClient, { InMemoryCache } from 'apollo-boost'
import Cookies from "js-cookie";


const client = new ApolloClient({
  uri: "/dev/search",

  // uri: process.env.API_DOMAIN! + process.env.API_ENDPOINT! + process.env.GRAPHQL_ENDPOINT!,
  cache: new InMemoryCache({
    addTypename: false,
  }),
  request: 
  (operation:any): void => {
    const token = Cookies.get('token')
    operation.setContext({
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
    })
  },
})
export default client
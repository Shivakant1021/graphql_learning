export const typeDefs = `#graphql
    type Game {
        id: ID!,                    
        title: String!,
        platform: [String!]!
    }
    type Review {
        id: ID!,
        rating: Int!,
        containt: String!
    }
    type Author {
        id: ID!,
        name: String!,
        verified: Boolean!
    }
    type Query {                                               
        reviews: [Review]
        games: [Game]
        authors: [Author]
    }


`
/* 
 ! this symbol define that field is requires so user must filled other wise null

  type Query {                                               
        reviews: [Review]
        games: [Game]
        authors: [Author]
    }

    This field we have to make in every schema of graphql its like a entry point

*/

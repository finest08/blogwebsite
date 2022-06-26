import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const query = gql`{
  assembly(where: {id: "cl4txz2f125es0b2r52v0c617"}) {
    name
    reference {
      ... on Assembly {
        name
        reference {
          ... on Hero {
            hero
            direction
            heroPrimary
            heroSecondary
            heroSubHeader
            altHeader
          }
          ... on Section {
            section
            direction
            header
            description
          }
        }
      }
    }
  }
}

`;

export const client = new ApolloClient({
  uri: "",
  cache: new InMemoryCache()
});

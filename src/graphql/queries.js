/* eslint-disable */
// this is an auto generated file. This will be overwritten

// export const getTalk = `query GetTalk($id: ID!) {
//   getTalk(id: $id) {
//     id
//     clientId
//     name
//     description
//     speakerName
//     speakerBio
//   }
// }
// `;
export const listTalks = `query listTalks {
  listTalks {
    items {
      id
      name
      description
      comments {
        items {
          message
        }
      }
    }
  }
}
`;
export const listCoins  = `query listCoins {
  getCoins {
    price_usd
    name
    id
    symbol
  }
}
`;
export const listCoinsWithArgs  = `query listCoinsWithArgs {
  getCoins(limit:3 start: 10) {
    price_usd
    name
    id
    symbol
  }
}
`;
// export const listTalks = `query ListTalks(
//   $filter: ModelTalkFilterInput
//   $limit: Int
//   $nextToken: String
// ) {
//   listTalks(filter: $filter, limit: $limit, nextToken: $nextToken) {
//     items {
//       id
//       clientId
//       name
//       description
//       speakerName
//       speakerBio
//     }
//     nextToken
//   }
// }
// `;

/* eslint-disable */
// this is an auto generated file. This will be overwritten

// export const createTalk = `mutation CreateTalk($input: CreateTalkInput!) {
//   createTalk(input: $input) {
//     id
//     clientId
//     name
//     description
//     speakerName
//     speakerBio
//   }
// }
// `;
// export const updateTalk = `mutation UpdateTalk($input: UpdateTalkInput!) {
//   updateTalk(input: $input) {
//     id
//     clientId
//     name
//     description
//     speakerName
//     speakerBio
//   }
// }
// `;
// export const deleteTalk = `mutation DeleteTalk($input: DeleteTalkInput!) {
//   deleteTalk(input: $input) {
//     id
//     clientId
//     name
//     description
//     speakerName
//     speakerBio
//   }
// }
// `;

export const createTalk = `mutation createTalk {
  createTalk(input: {
    id: "test-id-talk-1"
    name: "Talk 1"
    description: "Cool talk"
    speakerBio: "Cool gal"
    speakerName: "Jennifer"
  }) {
    id
    name
    description
  }
}
`;

export const createComment = `mutation createComment {
  createComment(input: {
    commentTalkId: "test-id-talk-1"
    message: "Great talk"
  }) {
    id message
  }
}
`;
